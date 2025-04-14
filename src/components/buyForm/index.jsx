"use client";
import { useEffect, useState, useRef } from "react";
import { getSettings, getCityState } from "../../lib/api";
import Select from "react-select";
import Loader from "../../components/loader";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";
import { ToastContainer, toast } from 'react-toastify';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused
            ? "#d1d5dc"
            : state.selectProps.error
                ? "red"
                : "#d1d5dc",
        boxShadow: "none",
        borderRadius: "0.5rem",
        padding: "2px",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "0.5rem",
        marginTop: "4px",
        zIndex: 20,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#E0E7FF" : "white",
        color: "#111827",
        padding: 10,
    }),
};

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const BuyForm = ({ product, closeModal }) => {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [getSetting, setGetSetting] = useState({});
    const [getState, setGetState] = useState([]);
    const [loading, setLoading] = useState(true);
    const formRef = useRef(null);
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    console.log(product, "product data in form ")
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRefs = {
        fullName: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        state: useRef(null),
        city: useRef(null),
        address: useRef(null),
    };

    const mobileCode = getSetting?.mobile_code || "";
    const mobileLength = getSetting?.mobile_length || 9;

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await getSettings();
                setGetSetting(data.data?.[0] || {});
            } catch (err) {
                console.error("Failed to fetch settings", err);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const data = await getCityState();
                setGetState(data.data);
            } catch (err) {
                console.error("Failed to fetch states", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStates();
    }, []);

    const fetchCitiesByState = async (stateId) => {
        try {
            const response = await fetch(`${baseUrl}/store/city/areas/${stateId}`);
            const result = await response.json();
            const cities = result.data.map((city) => ({
                value: city.id,
                label: city.name.trim(),
            }));
            setCityOptions(cities);
            setSelectedCity(null);
        } catch (err) {
            console.error("Error fetching cities:", err);
            setCityOptions([]);
        }
    };

    useEffect(() => {
        if (selectedState?.value) {
            fetchCitiesByState(selectedState.value);
        }
    }, [selectedState]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) return;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const errors = {};
        if (!formValues.fullName.trim()) errors.fullName = t('Full_name_is_required');
        if (!formValues.email.trim()) errors.email = t('Email_is_required');
        if (!formValues.phone.trim())
            errors.phone = t('Phone_number_is_required');
        else if (formValues.phone.length < mobileLength)
            errors.phone = `Phone must be ${mobileLength} digits`;

        if (!selectedState) errors.state = t('State_is_required');
        if (!selectedCity) errors.city = t('City_is_required');
        if (!formValues.address.trim()) errors.address = t('Address_is_required');

        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            // Scroll to first invalid field
            const firstErrorKey = Object.keys(errors)[0];
            formRefs[firstErrorKey]?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            setIsSubmitting(false);
            return;
        }

        try {
            const payload = {
                customer_name: formValues.fullName,
                customer_email: formValues.email,
                customer_mobile: `${mobileCode}${formValues.phone}`,
                customer_city_id: selectedState?.value,
                customer_area_id: selectedCity?.value,
                customer_city_name: selectedState?.label,
                customer_area_name: selectedCity?.label,
                customer_address: formValues.address,
                product_id: product?.product_id || 0,
                product_name: product?.name || "",
                product_quantity: product?.quantity || 1,
                product_sku: product?.product_sku || "",
                product_price: product.prices?.[0]?.sale_price || 0,
                total_price: (product.prices?.[0]?.sale_price) * (product?.quantity || 1),
                product_option_id: product.options?.[0]?.option_id || null,
                product_option_label: product.options?.[0]?.option_label || null,
                product_option_id: product.options?.[0]?.product_option_id || null,
                product_option_color: product.color || '',
            };

            console.log("Submitting payload:", payload);

            const res = await fetch(`${baseUrl}/store/place/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            console.log("API response:", result);

            if (result.success) {
                toast.success('Order placed successfully!');
                setFormValues({
                    fullName: "",
                    email: "",
                    phone: "",
                    address: "",
                });
                setSelectedState(null);
                setSelectedCity(null);

            setTimeout(() => {
                closeModal();
            }, 3000);
            } else {
                toast.error(result.message || "Failed to place order");
            }
        } catch (error) {
            console.error("Order error:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <form className="space-y-3" ref={formRef} onSubmit={handleSubmit}>
                <div className="space-y-3 h-[300px] md:h-[400px] overflow-y-auto px-2">
                    <div ref={formRefs.fullName}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('Full_Name')}</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formValues.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border ${formErrors.fullName ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            placeholder={t('Yourfull_name')}
                        />
                        {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
                    </div>

                    <div ref={formRefs.email}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('Email')}</label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            placeholder={t('Your_email')}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>

                    <div ref={formRefs.phone}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('Phone_Number')}</label>
                        <div className="flex rounded-md shadow-sm">
                            <span className={`inline-flex items-center px-3 border-gray-300 bg-gray-50 text-gray-500 text-sm ${language === "ar" ? "rounded-r-md border border-l-0" : "rounded-l-md border border-r-0"}`}>
                                +{mobileCode}
                            </span>
                            <input
                                type="tel"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border ${formErrors.phone ? "border-red-500" : "border-gray-300"
                                    } ${language === "ar" ? "rounded-l-md" : "rounded-r-md"}`}
                                placeholder={`Enter ${mobileLength}-digit number`}
                                maxLength={mobileLength}
                            />
                        </div>
                        {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                    </div>

                    <div ref={formRefs.state}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('State')}</label>
                        <Select
                            inputId="selectState"
                            options={getState.map((state) => ({
                                value: state.id,
                                label: state.name.trim(),
                            }))}
                            value={selectedState}
                            onChange={(option) => {
                                setSelectedState(option);
                                setFormErrors((prev) => ({ ...prev, state: "" }));
                            }}
                            styles={customStyles}
                            className="mt-2"
                            error={!!formErrors.state}
                        />
                        {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
                    </div>

                    <div ref={formRefs.city}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('city')}</label>
                        <Select
                            inputId="selectCity"
                            options={cityOptions}
                            value={selectedCity}
                            onChange={(option) => {
                                setSelectedCity(option);
                                setFormErrors((prev) => ({ ...prev, city: "" }));
                            }}
                            styles={customStyles}
                            className="mt-2"
                            isDisabled={!selectedState}
                            error={!!formErrors.city}
                        />
                        {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
                    </div>

                    <div ref={formRefs.address}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('Delivery_Address')}</label>
                        <textarea
                            name="address"
                            value={formValues.address}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border ${formErrors.address ? "border-red-500" : "border-gray-300"
                                } rounded-md`}
                            rows={3}
                            placeholder={t('Your_complete_delivery_address')}
                        />
                        {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
                    </div>
                </div>

                <div className="flex justify-center pt-2 px-2">
                    <button
                        type="submit"
                        className={`px-4 py-2 cursor-pointer w-full bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 ${isSubmitting ? "opacity-70" : ""}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="w-5 h-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                    />
                                </svg>
                                {t('Processing')}...
                            </>
                        ) : (
                            t('Order_Now')
                        )}
                    </button>

                </div>
            </form>
        </>
    );
};

export default BuyForm;
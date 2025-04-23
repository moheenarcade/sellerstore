"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";

const BundleSave = ({ product, currencyCode, t, onSelectionChange }) => {
    const { language } = useLanguage();
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (product?.discount_prices?.length > 0) {
            setSelectedOption(product.discount_prices[0]);
            if (onSelectionChange) {
                onSelectionChange(product.discount_prices[0]);
            }
        }
    }, [product]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (onSelectionChange) {
            onSelectionChange(option);
        }
    };

    console.log(selectedOption, "selected option in bundle component");
    return (

        <div className="">
            <div className="bundlessave flex items-center justify-center my-4">
                <div className="w-full h-[2px] bg-black"></div>
                <p className="font-[600] w-full text-[14px] uppercase text-center px-2">
                    {t('bundle_save')}
                </p>
                <div className="w-full h-[2px] bg-black"></div>
            </div>

            {product?.discount_prices?.map((discPrice) => (
                <div
                    key={discPrice.price}
                    onClick={() => handleOptionSelect(discPrice)}
                    className={`singlePrice mb-2 cursor-pointer flex items-center gap-2 py-1 md:py-3 px-2 rounded-xl border-[2px] transition-all duration-300 ease-in-out ${selectedOption?.price === discPrice.price ? 'border-black bg-gray-200' : 'border-gray-300 bg-gray-100'}`}
                >
                    <div className="checkbox w-fit">
                        <input
                            className="hidden"
                            type="radio"
                            checked={selectedOption?.price === discPrice.price}
                            readOnly
                            name="priceOption"
                        />
                        <div className={`w-[15px] h-[15px] rounded-full ${selectedOption?.price === discPrice.price ? 'bg-black' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className={`flex flex-col w-full md:border-l-0 pl-2 md:pl-0 ${language === "ar" ? "border-r-[1px] pr-2" : "border-l-[1px]"} `}>
                        <div className="flex justify-between">
                            <p className="font-[600]">{t('Price')}</p>
                            <p className="font-[600]">
                                {discPrice.price} {currencyCode}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-[600] text-[12px] md:text-[16px]">
                                {t('Quantity')}
                            </p>
                            <p className="font-[600]">
                                {discPrice.quantity}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default BundleSave;

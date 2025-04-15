"use client";
import { useEffect, useState } from "react";
import RandomReviews from "../../../components/randomReviews";
import { getProductBySlug, getSettings } from "../../../lib/api";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import OurGranteeShippingFaq from "../../../components/ourGranteeShippingFaq";
import ProductDetailImageSlider from "../../../components/productDetailImageSlider";
import Loader from "../../../components/loader";
import RelatedProducts from "../../../components/relatedProducts";
import ProductDescription from '../../../components/productDescription';
import BuyForm from "../../../components/buyForm"
import { useTranslation } from "../../../hooks/useTranslation";
import { useLanguage } from "../.././../context/LanguageContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiHandsClappingFill } from "react-icons/pi";



export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [getSetting, setGetSetting] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("buyOne");
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [currencyCode, setCurrencyCode] = useState('');
  console.log(selectedSize, "selectedSize page data");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const getImageUrl = (imageObj) => {
    if (!imageObj || !imageObj.image) return "/placeholder.webp";
    return imageObj.image.startsWith("http")
      ? imageObj.image
      : `${imageBaseUrl}${imageObj.image}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    if (product?.options?.length > 0) {
      const firstAvailableSize = product.options.find(
        (opt) => opt.option_name === "Size" && opt.available_quantity > 0
      );

      if (firstAvailableSize) {
        setSelectedSize(firstAvailableSize.option_label_id);
      }
    }
  }, [product]);


  const selectedSizeObj = product?.options?.find(
    opt => opt.option_label_id === selectedSize
  );

  useEffect(() => {
    const settings = localStorage.getItem('storeSettings');
    if (settings) {
      try {
        const parsedSettings = JSON.parse(settings);
        setCurrencyCode(parsedSettings.currency_code || 'OMR');
      } catch (error) {
        console.error("Failed to parse storeSettings:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSettings();
        const [firstSetting] = data.data || [];
        setGetSetting(firstSetting || {});
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductBySlug(slug);
        if (!data) {
          router.push("/not-found");
          return;
        }
        setProduct(data.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        router.push("/not-found");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProduct();
    }
  }, [slug, router]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <Loader />;
  }
  const totalAvailableQty = product.options.reduce((sum, opt) => sum + opt.available_quantity, 0);
  const isOutOfStock = totalAvailableQty === 0;


  return (
    <>
      <div className="container px-4 md:px-6 xl:px-28 mx-auto pt-6 md:pt-12 pb-12">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full md:w-[50%]">
            <ProductDetailImageSlider product={product} />
          </div>
          <div className="produt-detail-sec w-full md:w-[45%]">
            <div className="product-top-tag flex justify-center md:justify-end pb-3">
              <p className="text-[13px] md:text-lg uppercase font-[600] border-black border-2 py-1 px-3 w-fit">
                {t('Hot_product_few_left_in_stock')}
              </p>
            </div>
            <RandomReviews />
            <h1 className="text-2xl md:text-3xl font-[600] pt-3">
              {language === "ar" ? product.name_ar : product.name}
            </h1>
            <ul className="pt-2 md:pt-4">
              <li className="flex items-center mb-2">
                <p className="text-[16px]">
                  <b>{t('Brand')}:</b> {product.brand}
                </p>
              </li>
              <li className="flex items-center mb-2">
                <p className="text-[16px]">
                  <b>{t('Gender')}:</b> {product.gender}
                </p>
              </li>
              <li className="flex items-center mb-2">
                <p className="text-[16px]">
                  <b>{t('Color')}:</b> {product.color}
                </p>
              </li>
            </ul>
            {product.options.some(opt => opt.option_name === "Size") && (
              <>
                <div className="size-options mb-3">
                  <p className="text-[16px] pb-2">
                    <b>{t('Size')}:</b>
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex gap-3 flex-wrap">
                      {product.options
                        .filter(opt => opt.option_name === "Size")
                        .map((size) => {
                          const isOutOfStock = size.available_quantity === 0;
                          const isTooltipVisible = activeTooltip === size.option_label_id;

                          const handleTouchOrClick = () => {
                            setActiveTooltip(size.option_label_id);
                            setTimeout(() => setActiveTooltip(null), 2000);
                            if (!isOutOfStock) {
                              setSelectedSize(size.option_label_id);
                            }
                          };

                          return (
                            <div
                              key={size.option_label_id}
                              onClick={handleTouchOrClick}
                              onTouchStart={handleTouchOrClick}
                              className={`relative group single-size font-[600] py-1 flex justify-center px-4 rounded-full w-[60px] transition-all duration-[0.3s] ease-in-out
            ${selectedSize === size.option_label_id
                                  ? "bg-black text-white border-black border-[2px]"
                                  : "bg-white border-dotted border-[2px]"}
            ${isOutOfStock ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          `}
                              aria-disabled={isOutOfStock}
                            >
                              {size.option_label}

                              <div
                                className={`absolute w-[165px] z-[99999] text-center p-2 rounded-md -top-10 left-1/2 transform -translate-x-1/2 text-white text-sm pointer-events-none
              ${isOutOfStock ? "bg-red-600" : "bg-black"}
              ${isTooltipVisible ? "opacity-100" : "opacity-0"} 
              group-hover:opacity-100 transition-opacity duration-300
            `}
                              >
                                {isOutOfStock
                                  ? t('Out_of_stock')
                                  : `${t('Available_Quantity')}: ${size.available_quantity}`}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center gap-4">
              <p className="font-[600] text-2xl">
                {product.prices?.[0]?.sale_price} {currencyCode}
              </p>
              <p className="font-[300] line-through text-xl">
                {product.prices?.[0]?.price} {currencyCode}
              </p>
              {product.prices?.[0]?.price && product.prices?.[0]?.sale_price && (
                <div className="percent-off-tag py-1 px-3 text-black font-[600] bg-yellow-500 rounded-md">
                  <p className="flex items-center gap-2">
                    <PiHandsClappingFill className="text-xl mt-[2px]" />
                    Save
                    <span className="">
                      {Math.round(
                        ((product.prices[0].price - product.prices[0].sale_price) / product.prices[0].price) * 100
                      )}
                      %
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="">
              <div className="bundlessave flex items-center justify-center my-4">
                <div className="w-full h-[2px] bg-black"></div>
                <p className="font-[600] w-full text-[14px] uppercase text-center px-2">
                  {t('bundle_save')}
                </p>
                <div className="w-full h-[2px] bg-black"></div>
              </div>

              <div className="singlePrice mb-2 cursor-pointer flex items-center gap-2 py-1 md:py-3 px-2 rounded-xl border-[2px] transition-all duration-300 ease-in-out border-black bg-gray-100">
                <div className="checkbox w-fit">
                  <input
                    className="hidden"
                    type="radio"
                    defaultChecked
                    name="priceOption"
                  />
                  <div className="w-[15px] h-[15px] rounded-full bg-black"></div>
                </div>
                <div className={`flex flex-col w-full  md:border-l-0 pl-2 md:pl-0 ${language === "ar" ? "border-r-[1px] pr-2" : "border-l-[1px]"} `}>
                  <div className="flex justify-between">
                    <p className="font-[600]">{t('Price')}</p>
                    <p className="font-[600]">
                      {product.prices?.[0]?.sale_price} {currencyCode}
                    </p>
                  </div>
                  <div className="flex justify-end md:justify-between">
                    <p className="font-[300] text-[12px] md:text-[16px] hidden md:block">
                      {t('Free_Shipping_on_orders_over_15_OMR')} 15 {currencyCode}
                    </p>
                    <p className="font-[300] line-through">
                      {" "}
                      {product.prices?.[0]?.price} {currencyCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative group w-full"
              onTouchStart={() => {
                if (isOutOfStock) {
                  setShowTooltip(true);
                  setTimeout(() => setShowTooltip(false), 2000);
                }
              }}
            >
              <button
                onClick={() => {
                  if (!isOutOfStock) openModal();
                }}
                className={`w-full cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out py-3 text-md md:text-xl px-4 rounded-lg bg-black text-white font-[500] mt-3`}
                disabled={isOutOfStock}
              >
                {t('Buy_with_Cash_on_Delivery')}
              </button>

              {/* Tooltip for both desktop and mobile */}
              {isOutOfStock && (
                <div
                  className={`absolute w-[200px] z-[999] text-center p-2 rounded-md -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm 
        ${showTooltip ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
        transition-opacity duration-300 pointer-events-none`}
                >
                  {t('Out_of_stock')}
                  <TiArrowSortedDown className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 text-2xl text-red-600" />
                </div>
              )}
            </div>

            <div>
              <OurGranteeShippingFaq />
            </div>
          </div>
        </div>
        <div className="product-description pt-8 w-full lg:w-[75%] mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-[600]">
            {t('Description')}
          </h2>
          <ProductDescription description={product.description} description_ar={product.description_ar} />
        </div>
      </div>

      <div className="pb-12">
        <RelatedProducts currencyCode={currencyCode} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999999999] shadow-lg p-4 bg-gray-900/85 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{t('Cash_on_Delivery')}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4 border-t-[1px] border-t-gray-300 pt-3 flex">
              <div className="relative">
                <Image
                  className="w-[70px] h-[70px] object-cover block rounded-lg"
                  src={getImageUrl(product.images?.[0])}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <p className="qty-tag absolute -top-2 right-[0px] bg-gray-500 text-white font-[500] rounded-full text-[14px] text-center flex items-center justify-center w-5 h-5">
                  1
                </p>
              </div>
              <p className={`font-semibold w-[70%] lg:w-[80%] ${language === "ar" ? "mr-4" : "ml-4"}`}>
                {language === "ar" ? product.name_ar : product.name}
              </p>
            </div>
            <div className="bg-gray-100 p-3 rounded-md mb-4">
              <div className="flex justify-between">
                <p className="text-[15px]">{t('Price')}:</p>
                <p className="font-[600] text-[15px]"> {product.prices?.[0]?.sale_price} {currencyCode}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px]">{t('Subtotal')}:</p>
                <p className="font-[600] text-[15px]"> {product.prices?.[0]?.sale_price} {currencyCode}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px]">{t('Free_Shipping')}:</p>
                <p className="font-[600] text-[15px]">{t('Free')}</p>
              </div>
              <div className="flex justify-between border-t-[1px] border-t-gray-300 pt-2 mt-2">
                <p className="font-[600] text-[15px]">{t('Grand_Total')}:</p>
                <p className="font-[600] text-[15px]">{product.prices?.[0]?.sale_price} {currencyCode}</p>
              </div>
            </div>

            <BuyForm product={product} closeModal={closeModal} selectedSize={selectedSizeObj} />
          </div>
        </div>
      )}
    </>
  );
}

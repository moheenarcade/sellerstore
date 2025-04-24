"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/images/main-logo.webp";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import HeaderSlide from "../headerSlide";
import "../../assets/style/togglemenu.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";
import HeaderCategory from "../headerCategory";
import { getCategories } from "../../lib/api";
import MobileMenuLinks from "../../components/mobileMenuLinks";
import { FaWhatsapp } from "react-icons/fa6";
import "./switchbtn.css"

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL_FOT_LOGO;

const Header = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storeSettings, setStoreSettings] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBox, setShowBox] = useState(false);



  // console.log(storeSettings?.store_logo, "logo data he re")
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const settings = localStorage.getItem('storeSettings');
      if (settings) {
        setStoreSettings(JSON.parse(settings));
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggleRef = useRef(null);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return Logo;
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    const encodedPath = encodeURI(imagePath);
    return `${imageBaseUrl}${encodedPath}`;
  };

  const whatsappNumber = '971565651133';

  return (
    <header>
      <HeaderSlide />
      <div
        className={`header-main border-b-[1px] border-b-gray-300 z-[99999] ${isSticky
          ? "fixed top-0 left-0 right-0 z-[9999999] bg-white"
          : "relative"
          }`}
      >
        <div className="hidden lg:block">
          <div
            className={`header-navbar container px-4 md:px-6 2xl:px-28 mx-auto `}
          >
            <nav className="flex items-center py-4 border-b-[1px] border-b-gray-300">
              <div className="flex items-center gap-12 w-full">
                <Link href="/">
                  <div className="flex items-center">
                    <Image
                      className="w-[50px]"
                      src={getImageUrl(storeSettings?.store_logo)}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <p className="font-bold text-[#00000080] uppercase">
                      {storeSettings?.store_name}
                    </p>
                  </div>
                </Link>
                <div className="w-[70%] relative">
                  <input
                    onChange={e => {
                      setSearchTerm(e.target.value);
                      setShowBox(!!e.target.value.trim());
                    }}
                    onFocus={() => setShowBox(!!searchTerm.trim())}
                    onBlur={() => setTimeout(() => setShowBox(false), 120)}
                    value={searchTerm}
                    type="search"
                    placeholder={t("search_products")}
                    className="head-search-bar border-[1px] border-gray-300 bg-[#f4f4f4] rounded-sm w-full py-2 px-4"
                  />
                  {showBox && (
                    <div
                      className="absolute left-0 right-0 mt-1 bg-white border border-gray-200
               rounded shadow-lg z-[999999] overflow-y-auto"
                      dir={language === "ar" ? "rtl" : "ltr"}
                      style={{
                        maxHeight: "400px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="search-result w-full">
                        <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                          <div className="product-img">
                            <Image
                              className="w-[50px] h-[50px] rounded-md"
                              src={getImageUrl(storeSettings?.store_logo)}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="pl-2">
                            <p className="text-md font-[400]">Premium Product</p>
                            <p className="text-sm font-[300]">99 AED</p>
                          </div>
                        </li>

                      </ul>
                    </div>
                  )}

                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className='whatsapp-btn py-2 flex justify-center px-1 text-[#05d960] '>
                  <Link href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"><FaWhatsapp className='text-3xl' /></Link>
                </div>
                <div className="switch">

                  <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                    onChange={toggleLanguage}
                    checked={language === "en"}
                  />
                  <label htmlFor="language-toggle"></label>
                  <span className="on">AR</span>
                  <span className="off">EN</span>
                </div>
              </div>
            </nav>
            <HeaderCategory />
          </div>
        </div>
        <div className="block lg:hidden mobile-header relative">
          <div
            className={`flex items-center justify-between gap-12 w-full px-2 py-2 ${isSticky
              ? "fixed top-0 left-0 right-0 z-[9999999] bg-white shadow-md"
              : ""
              }`}
          >
            <Link href="/">
              <div className="flex items-center">
                <Image
                  className="w-[35px]"
                  src={getImageUrl(storeSettings?.store_logo)}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <div className="w-[70%] ">
              <input
                onChange={e => {
                  setSearchTerm(e.target.value);
                  setShowBox(!!e.target.value.trim());
                }}
                onFocus={() => setShowBox(!!searchTerm.trim())}
                onBlur={() => setTimeout(() => setShowBox(false), 120)}
                value={searchTerm}
                type="search"
                placeholder={t("search_products")}
                className="text-[14px] head-search-bar border-[1px] border-gray-300 bg-[#f4f4f4] rounded-sm w-full py-1 px-2"
              />

              {showBox && (
                <div
                  className="absolute left-0 py-2 right-0 mt-1 bg-white border border-gray-200
               rounded shadow-lg z-[999999] overflow-y-auto"
                  dir={language === "ar" ? "rtl" : "ltr"}
                  style={{
                    maxHeight: "300px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <ul className="search-result w-full">
                    <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>
                    <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>
                    <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>   <li className="flex items-start py-2 gap-3 px-6 w-full cursor-pointer bg-white hover:bg-gray-100 transition-all duration-[0.3s] ease-in-out">
                      <div className="product-img h-[40px] w-[40px]">
                        <Image
                          className="w-full h-full rounded-md"
                          src={getImageUrl(storeSettings?.store_logo)}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="pl-2">
                        <p className="text-[14px] md:text-md font-[400]">Premium Product</p>
                        <p className="text-sm font-[300]">99 AED</p>
                      </div>
                    </li>

                  </ul>
                </div>
              )}
            </div>
            <div className="hamburger-menu w-[10%] md:w-[4%] flex justify-end">
              <input id="menu__toggle" type="checkbox" ref={menuToggleRef} />
              <label
                className={`menu__btn z-[999999] ${isSticky ? "top-[10px]" : "top-[36px]"
                  } ${language === "ar" ? "right-[89%]" : "right-[15px]"}`}
                htmlFor="menu__toggle"
              >
                <span></span>
              </label>

              <ul className="menu__box ">
                <p
                  className={`1text-[18px] pl-5 font-[600] text-[#333] ${language === "ar" ? "pr-[24px]" : "pr-[5px]"
                    }`}
                >
                  {t("Menu")}
                </p>
                <MobileMenuLinks categories={categories} closeMobileMenu={closeMobileMenu} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

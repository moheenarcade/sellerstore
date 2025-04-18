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
const Header = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storeSettings, setStoreSettings] = useState(null);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL_FOT_LOGO;

  console.log(storeSettings?.store_logo, "logo data he re")
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
                <div className="w-[70%]">
                  <input
                    type="search"
                    placeholder={t("search_products")}
                    className="head-search-bar border-[1px] border-gray-300 bg-[#f4f4f4] rounded-sm w-full py-2 px-4"
                  />
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <button className="cursor-pointer text-2xl text-gray-500 transition-all duration-[0.3s] ease-in-out hover:text-[#f69853]">
                  <LuHeart />
                </button>
                <button className="cursor-pointer text-2xl text-gray-500 transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]">
                  <FiShoppingCart />
                </button>
              </div>
            </nav>
            <HeaderCategory />
          </div>
        </div>
        <div className="block lg:hidden mobile-header ">
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
                  src={Logo}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <div className="w-[60%]">
              <input
                type="search"
                placeholder={t("search_products")}
                className="text-[14px] head-search-bar border-[1px] border-gray-300 bg-[#f4f4f4] rounded-sm w-full py-1 px-2"
              />
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

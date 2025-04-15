"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../hooks/useTranslation";
import {
  getProducts,
  getCategories,
  getProductsByCategorySlug,
} from "../../lib/api";
import { useLanguage } from "../../context/LanguageContext";
import ProductMainLists from "../../components/productListing/productMainLists";

const Products = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [currencyCode, setCurrencyCode] = useState('');

  const [selectedCategories, setSelectedCategories] = useState([]);
  const getRangeBackground = (value) => {
    const percentage = (value / 100) * 100;
    return {
      "--range-progress": `${percentage}%`,
    };
  };

  // get categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((name) => name !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  // Function to fetch products for selected categories
  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategories.length === 0) {
        console.log("No categories selected");
        return;
      }

      try {
        const promises = selectedCategories.map((cat) =>
          getProductsByCategorySlug(cat.toLowerCase().replace(/\s+/g, "-"))
        );
        const results = await Promise.all(promises);
        console.log("Fetched products for selected categories:", results);

        // You can now update your UI with these products, maybe store in useState?
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategories]);
  // Generate the link for multiple categories
  const getMultiCategoryLink = () => {
    if (selectedCategories.length === 0) return "#";

    const slugs = selectedCategories.map((cat) =>
      cat.toLowerCase().replace(/\s+/g, "-")
    );

    return `/products/${slugs.join(",")}`;
  };

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

  return (
    <div className="products-main container px-4 md:px-6 xl:px-28 mx-auto py-6">
      <div className="block lg:hidden">
        <div className="flex justify-between items-center border-b-[1px] border-b-gray-300 pb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="border-[1px] border-[#f69853] rounded-lg text-[#f69853] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out"
          >
            Filters
          </button>
          <button>Price : 10 {currencyCode}</button>
        </div>
      </div>
      <div className="flex justify-between gap-[15px]">
        <div className="filters-main hidden lg:block w-[25%] relative">
          <div className="filter-container border-[1px] border-gray-300 rounded-lg">
            <div className="border-b-[1px] border-b-gray-300">
              <h1 className="text-lg font-[600] px-4 py-2">Filters</h1>
            </div>
            <div className="px-4 h-[94%] overflow-y-auto pb-12">
              <div className="filter-price border-b-[1px] border-b-gray-300 pb-6">
                <div className="flex items-center">
                  <h2 className="text-lg font-[600] py-2">Price:</h2>
                  <p className="font-[400] ps-3 text-[16px]">
                    0 {currencyCode} - {priceRange} {currencyCode}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    style={getRangeBackground(priceRange)}
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="custom-range w-full outline-none"
                  />

                  <button className="border-[1px] border-[#f69853] rounded-lg text-[#f69853] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Go
                  </button>
                </div>
              </div>
              <div className="filter-for-you border-b-[1px] border-b-gray-300 pb-6">
                <h2 className="text-lg font-[600] py-2">For you</h2>
                <div className="flex gap-2 flex-wrap text-[14px]">
                  <button className="border-[1px] border-[#f69853] rounded-lg text-[#f69853] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    All
                  </button>
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Amazing Products
                  </button>
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Today's Deal
                  </button>
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Hot Sale
                  </button>
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Related Products
                  </button>
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    Special Offer
                  </button>{" "}
                  <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                    New Products
                  </button>
                </div>
              </div>
              <div className="filter-cat ">
                <p className="text-lg font-[600] py-2">Category</p>
                <div className="flex flex-col justify-between">
                  <ul className="pl-2 text-[14px]">
                    {categories.map((cat) => (
                      <li
                        key={cat.id}
                        className="form-group py-3 border-b-[1px] border-b-gray-300"
                      >
                        <input
                          type="checkbox"
                          id={`cat-${cat.id}`}
                          checked={selectedCategories.includes(cat.name)}
                          onChange={() => handleCheckboxChange(cat.name)}
                        />
                        <label htmlFor={`cat-${cat.id}`}>{cat.name}</label>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={getMultiCategoryLink()}
                    className="pt-6 w-[70%] mx-auto right-0 left-0 absolute bottom-4"
                  >
                    <button
                      disabled={selectedCategories.length === 0}
                      className={`w-full py-2 rounded-lg transition-all duration-300 ${selectedCategories.length === 0
                          ? "bg-gray-300 text-white cursor-not-allowed"
                          : "bg-[#f69853] text-white hover:bg-[#e87f34] cursor-pointer"
                        }`}
                    >
                      Filter Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductMainLists currencyCode={currencyCode} />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999999999]"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full w-[90%] sm:w-[50%] pr-10">
                <div className="pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 translate-x-0">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="absolute top-0 bg-white py-4 z-[9999999] flex justify-between right-0 -ml-8 w-full pt-5 pr-2 sm:-ml-10 sm:pr-4">
                      <div className="px-4 sm:px-6">
                        <h2
                          className="text-base font-semibold text-gray-900"
                          id="slide-over-title"
                        >
                          Filters
                        </h2>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="relative rounded-md text-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="px-3 h-screen overflow-y-auto pt-12">
                      <div className="filter-price border-b-[1px] border-b-gray-300 pb-6">
                        <div className="flex items-center text-[14px]">
                          <h2 className="text-lg font-[600] py-2">Price:</h2>
                          <p className="font-[400] ps-3 ">
                            0 {currencyCode} - {priceRange} {currencyCode}
                          </p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <input
                            style={getRangeBackground(priceRange)}
                            type="range"
                            min="0"
                            max="100"
                            value={priceRange}
                            onChange={(e) =>
                              setPriceRange(Number(e.target.value))
                            }
                            className="custom-range w-full outline-none"
                          />

                          <button className="border-[1px] border-[#f69853] rounded-lg text-[#f69853] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Go
                          </button>
                        </div>
                      </div>
                      <div className="filter-for-you border-b-[1px] border-b-gray-300 pb-6">
                        <h2 className="text-lg font-[600] py-2">For you</h2>
                        <div className="flex gap-2 flex-wrap text-[14px]">
                          <button className="border-[1px] border-[#f69853] rounded-lg text-[#f69853] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            All
                          </button>
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Amazing Products
                          </button>
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Today's Deal
                          </button>
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Hot Sale
                          </button>
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Related Products
                          </button>
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            Special Offer
                          </button>{" "}
                          <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                            New Products
                          </button>
                        </div>
                      </div>
                      <div className="filter-cat pb-6">
                        <p className="text-lg font-[600] py-2">Category</p>
                        <div className="flex flex-col justify-between">
                          <ul className="pl-2 text-[14px]">
                            {categories.map((cat) => (
                              <li
                                key={cat.id}
                                className="form-group py-3 border-b-[1px] border-b-gray-300"
                              >
                                <input
                                  type="checkbox"
                                  id={`cat-${cat.id}`}
                                  checked={selectedCategories.includes(
                                    cat.name
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(cat.name)
                                  }
                                />
                                <label htmlFor={`cat-${cat.id}`}>
                                  {cat.name}
                                </label>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={getMultiCategoryLink()}
                            className="absolut bottom-4 mx-auto right-0 left-0 w-[70%] mt-6"
                          >
                            <button
                              disabled={selectedCategories.length === 0}
                              className={`w-full py-2 rounded-lg transition-all duration-300 ${selectedCategories.length === 0
                                  ? "bg-gray-300 text-white cursor-not-allowed"
                                  : "bg-[#f69853] text-white hover:bg-[#e87f34]"
                                }`}
                            >
                              Filter Products
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

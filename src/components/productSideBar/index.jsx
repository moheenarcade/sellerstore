"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../../hooks/useTranslation';
import { getProducts, getCategories, getProductsByCategorySlug } from "../../lib/api";
import { useLanguage } from '../../context/LanguageContext';


const ProductSideBar = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const getRangeBackground = (value) => {
        const percentage = (value / 100) * 100;
        return {
            '--range-progress': `${percentage}%`,
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
        setSelectedCategories(prev => {
            if (prev.includes(categoryName)) {
                return prev.filter(name => name !== categoryName);
            } else {
                return [...prev, categoryName];
            }
        });
    };



    // Function to fetch products for selected categories
    useEffect(() => {
        const fetchProducts = async () => {
            if (selectedCategories.length === 0) {
                console.log('No categories selected');
                return;
            }

            try {
                const promises = selectedCategories.map(cat =>
                    getProductsByCategorySlug(cat.toLowerCase().replace(/\s+/g, '-'))
                );
                const results = await Promise.all(promises);
                console.log('Fetched products for selected categories:', results);

                // You can now update your UI with these products, maybe store in useState?
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedCategories]);
    // Generate the link for multiple categories
    const getMultiCategoryLink = () => {
        if (selectedCategories.length === 0) return '#';

        const slugs = selectedCategories.map(cat =>
            cat.toLowerCase().replace(/\s+/g, '-')
        );

        return `/products/${slugs.join(',')}`;
    };
    return (

        <>
            <div className="filters-main hidden lg:block w-[25%] relative">
                <div className='filter-container border-[1px] border-gray-300 rounded-lg'>
                    <div className="border-b-[1px] border-b-gray-300">
                        <h1 className='text-lg font-[600] px-4 py-2'>Filters</h1>
                    </div>
                    <div className="px-4 h-[94%] overflow-y-auto">
                        <div className="filter-price border-b-[1px] border-b-gray-300 pb-6">
                            <div className="flex items-center">
                                <h2 className='text-lg font-[600] py-2'>Price:</h2>
                                <p className="font-[400] ps-3 text-[16px]">0 OMR - {priceRange} OMR</p>
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
                            <h2 className='text-lg font-[600] py-2'>For you</h2>
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
                                </button>   <button className="border-[1px] border-[#00000080] rounded-lg text-[#222222] cursor-pointer py-1 px-4 hover:border-[#f69853] hover:text-[#f69853] transition-all duration-[0.3s] ease-in-out">
                                    New Products
                                </button>
                            </div>
                        </div>
                        <div className="filter-cat">
                            <p className='text-lg font-[600] py-2'>Category</p>
                            <div className="flex flex-col justify-between">
                                <ul className="pl-2 text-[14px]">
                                    {categories.map((cat) => (
                                        <li key={cat.id} className="form-group py-3 border-b-[1px] border-b-gray-300">
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
                                <div className="absolute bottom-4"></div>
                                <Link href={getMultiCategoryLink()}>
                                    <button
                                        disabled={selectedCategories.length === 0}
                                        className={`w-full py-2 rounded-lg transition-all duration-300 ${selectedCategories.length === 0
                                                ? 'bg-gray-300 text-white cursor-not-allowed'
                                                : 'bg-[#f69853] text-white hover:bg-[#e87f34]'
                                            }`}
                                    >
                                        See Products
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSideBar;

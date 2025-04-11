'use client';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Image from 'next/image';
import OMflag from "../../../public/images/omflag.png";
import ENflag from "../../../public/images/englang.png";
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';


const FloatedLinks = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (

        <div className={`floatedLinks-main bg-white fixed top-[50%]  z-[99999] ${language === 'ar' ? 'left-0 rounded-lg' : 'right-0'}`}>
            <div className="">
                <button
                    onClick={toggleLanguage}
                    className='lang-btn py-2 px-1 flex justify-center cursor-pointer border-b-[1px] border-b-[#0000001f]'
                >
                    <Image
                        src={language === 'en' ? ENflag : OMflag}
                        height="27"
                        width="27"
                        className="me-1 rounded-full h-[25px] w-[25px]"
                        alt={language === 'en' ? 'English' : 'العربية'}
                    />
                    {/* <span className="ms-1 text-xs">
                        {language === 'en' ? 'ع' : 'EN'}
                    </span> */}
                </button>
                <div className='whatsapp-btn py-2 flex justify-center px-1 text-[#05d960] '>
                    <Link href="#"><FaWhatsapp className='text-2xl' /></Link>
                </div>
                {showScrollTop && (
                    <button onClick={scrollToTop} className='scroll-top-btn flex justify-center py-2 px-1 w-full cursor-pointer border-t-[1px] border-t-[#0000001f]'>
                        <FaAngleUp className='text-2xl' />
                    </button>
                )}
            </div>
        </div>
    )
}

export default FloatedLinks;

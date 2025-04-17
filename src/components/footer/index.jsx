"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdOutlineEmail, MdLocalPhone, MdOutlineFacebook } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { PiSnapchatLogo } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";
import { useTranslation } from '../../hooks/useTranslation';
import { getCategories } from "../../lib/api";
import { useRouter } from "next/navigation";
import { useSelectedCategory } from "../../context/SelectedCategoryContext";


const Footer = () => {
  const { t } = useTranslation();
  const [storeSettings, setStoreSettings] = useState(null);
  const [categories, setCategories] = useState([]);
  const { setSelectedCategory } = useSelectedCategory();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  console.log(categories, "category");

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const settings = localStorage.getItem('storeSettings');
      if (settings) {
        setStoreSettings(JSON.parse(settings));
      }
    }
  }, []);


  const formatTime = (timeString) => {
    if (!timeString) return '';

    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(+hours);
    date.setMinutes(+minutes);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };


  return (

    <footer className='footer-main bg-[#2d2d2d] pt-8'>
      <div className="container px-4 md:px-6 2xl:px-28 mx-auto pb-8">
        <div className="footer-nav flex flex-col md:flex-row gap-12 md:gap-6 justify-between text-white">
          <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg pb-3'>{storeSettings?.store_name}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{storeSettings?.store_open_from} to {storeSettings?.store_open_to}</li>
              {/* <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{formatTime(storeSettings?.store_opening_time || '09:00')} - {formatTime(storeSettings?.store_closing_time || '20:00')} </li> */}
              {storeSettings?.store_opening_time && storeSettings?.store_closing_time && (
                <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
                  <span>{formatTime(storeSettings.store_opening_time)} - {formatTime(storeSettings.store_closing_time)}</span>
                </li>
              )}
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{storeSettings?.special_notice}</li>
            </ul>
          </div>
          <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg pb-3'>{t('top_categories')}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              {categories.map((cat) => (
                <li key={cat.id} className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
                  <Link href={`/products/${cat.name}`}
                 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory(cat.name);
                      router.push("/products");
                    }}
                  >
                    {cat.name}
                  </Link></li>
              ))}
            </ul>
          </div> <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg  pb-3'>{t('offers_for_you')}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('amazing_products')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('todays_Deal')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('related_products')}</Link></li>
            </ul>
          </div> <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg pb-3'>{t('get_in_touch')}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href={`mailto:${storeSettings?.store_email}`} className='flex items-center gap-2'><MdOutlineEmail className='text-xl' />{storeSettings?.store_email || 'example@email.com'}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href={`tel:${storeSettings ? storeSettings.mobile_code + storeSettings.store_mobile : ''}`} className='flex items-center gap-2'><MdLocalPhone className='text-xl' />{storeSettings ? `${storeSettings.mobile_code}${storeSettings.store_mobile}` : '000000000'}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href={`https://wa.me/${storeSettings?.store_whatsapp}`} className='flex items-center gap-2'><SiWhatsapp className='text-xl' /> {storeSettings?.store_whatsapp || '000000000'}</Link></li>
              {storeSettings?.social_links?.facebook && (
                <li className='transition-all duration-[0.3s] ease-in-out hover:text-[#f69853]'>
                  <Link href={storeSettings.social_links.facebook} target='_blank' className='flex items-center gap-2'>
                    <MdOutlineFacebook className='text-xl' />{t('Facebook')}
                  </Link>
                </li>
              )}
              {storeSettings?.social_links?.instagram && (
                <li className='transition-all duration-[0.3s] ease-in-out hover:text-[#f69853]'>
                  <Link href={storeSettings.social_links.instagram} target='_blank' className='flex items-center gap-2'>
                    <IoLogoInstagram className='text-xl' />{t('Instagram')}
                  </Link>
                </li>
              )}
              {storeSettings?.social_links?.snapchat && (
                <li className='transition-all duration-[0.3s] ease-in-out hover:text-[#f69853]'>
                  <Link href={storeSettings.social_links.snapchat} target='_blank' className='flex items-center gap-2'>
                    <PiSnapchatLogo className='text-xl' />{t('Snapchat')}
                  </Link>
                </li>
              )}
              {storeSettings?.social_links?.tiktok && (
                <li className='transition-all duration-[0.3s] ease-in-out hover:text-[#f69853]'>
                  <Link href={storeSettings.social_links.tiktok} target='_blank' className='flex items-center gap-2'>
                    <AiFillTikTok className='text-xl' />{t('Tiktok')}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy-right bg-[#393939] pt-4 font-[300] pb-20 lg:pb-4">
        <div className="container px-4 md:px-6 2xl:px-28 mx-auto flex flex-col md:flex-row justify-between items-center text-[#fff]">
          <p className='text-[12px] text-center md:text-start pb-4 md:pb-0 flex items-center'><FaRegCopyright />2025 {storeSettings?.store_name?.replace(/\s+/g, '')}   Powered by Reselluae</p>
          <ul className='text-[12px] flex items-center gap-4'>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="/privacy-policy">
                {t('privacy_policy')}
              </Link>
            </li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="/terms-conditions">
                {t('terms_and_conditions')}
              </Link>
            </li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="/about-us">
                {t('about_us')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

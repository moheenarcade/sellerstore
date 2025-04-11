"use client"
import React from 'react'
import Link from 'next/link';
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { PiSnapchatLogo } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();
  return (

    <footer className='footer-main bg-[#2d2d2d] pt-8'>
      <div className="container px-2 md:px-6 xl:px-28 mx-auto">
        <div className="footer-nav flex flex-col md:flex-row gap-12 md:gap-6 justify-between text-white">
          <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg pb-3'>{t('free_souq_oman')}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>96892080045</li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{t('monday_to_saturday')}</li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{t('timing_office')}</li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{t('on_sunday')}</li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{t('0900AM_0600PM')}</li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>{t('public_holidays_might')}</li>
            </ul>
          </div>
          <div className="">
            <p className='font-[400] text-lg md:text-[15px] 2xl:text-lg pb-3'>{t('top_categories')}</p>
            <ul className='font-[300] text-sm md:text-[12px] xl:text-sm flex flex-col gap-2 text-[#fff]'>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('perfume')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('Cosmatic')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('Electronics')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('kitchen_appliances')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('car_vehicle')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#">{t('fashion')}</Link></li>
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
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><MdOutlineEmail className='text-xl' />freesouq@gmail.com</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><MdLocalPhone className='text-xl' />96892080045</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><SiWhatsapp className='text-xl' />96892080045</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><MdOutlineFacebook className='text-xl' />{t('Facebook')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><IoLogoInstagram className='text-xl' />{t('Instagram')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><PiSnapchatLogo className='text-xl' />{t('Snapchat')}</Link></li>
              <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><Link href="#" className='flex items-center gap-2'><AiFillTikTok className='text-xl' />{t('Tiktok')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-[#5c5c5c] mt-8">
        <div className="footer-follow-us flex justify-center lg:justify-start items-center gap-4 font-[300] container px-2 md:px-6 xl:px-28 mx-auto py-6">
          <p className='text-white'>{t('follow_us_on')}: </p>
          <ul className='flex items-center gap-4 text-[#fff] text-xl'>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><MdOutlineFacebook /></li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><IoLogoInstagram /></li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><AiFillTikTok /></li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'><PiSnapchatLogo /></li>
          </ul>
        </div>
      </div>
      <div className="footer-copy-right bg-[#393939] pt-4 font-[300] pb-20 lg:pb-4">
        <div className="container px-2 md:px-6 xl:px-28 mx-auto flex flex-col md:flex-row justify-between items-center text-[#fff]">
          <p className='text-[12px] text-center md:text-start pb-4 md:pb-0'>{t('cpy_right_text')}</p>
          <ul className='text-[12px] flex items-center gap-4'>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="#">
                {t('privacy_policy')}
              </Link>
            </li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="#">
                {t('terms_and_conditions')}
              </Link>
            </li>
            <li className='transition-all duration-[0.3s] ease-in-out  hover:text-[#f69853]'>
              <Link href="#">
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

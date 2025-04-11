'use client';
import React from 'react';
import HeroSlider from "../components/homePage/heroSlider";
import HotSaleListing from "../components/homePage/hotSaleListing";
import NewProductsListing from "../components/homePage/newProductsListing";
import SmallBannerAd from "../components/homePage/smallBannerAd";
import { useLanguage } from '../context/LanguageContext';


const Home = () => {
  const { language } = useLanguage(); 
  return (
    <>
      <div className="py-4 lg:py-12" key={language}>
        <HeroSlider/>
        <HotSaleListing/>
        <SmallBannerAd />
        <NewProductsListing />
      </div>
    </>
  );
};

export default Home;

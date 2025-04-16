"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer/index";
import Header from "../components/header/index";
import Head from "next/head";
import "../assets/style/index.css";
import FloatedLinks from "../components/floatedLinks";
import { LanguageProvider } from "../context/LanguageContext";
import MobileBottomMenu from "../components/mobileBottomMenu";
import Loader from "../components/loader";
import { getCategories  , getSettings} from "../lib/api";
import { SelectedCategoryProvider } from "../context/SelectedCategoryContext";

export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryResponse, settingsResponse] = await Promise.all([
          getCategories(),
          getSettings()
        ]);
  
        setCategories(categoryResponse.data || []);
        
        // Do something with settingsResponse, if needed
        console.log("Settings:", settingsResponse);
  
      } catch (error) {
        console.error("Failed to fetch categories or settings", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SelectedCategoryProvider>
            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Header />
            <FloatedLinks />
            <MobileBottomMenu />
            {loading ? <Loader /> : <>{children}</>}
            <Footer />
          </SelectedCategoryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

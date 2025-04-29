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
import { getCategories, getSettings } from "../lib/api";
import { SelectedCategoryProvider } from "../context/SelectedCategoryContext";
import PixelTracker from "../components/PixelTracker";

export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryResponse, settingsResponse] = await Promise.all([
          getCategories(),
          getSettings(),
        ]);

        setCategories(categoryResponse.data || []);
        setSettings(settingsResponse.data || null);

        // Store pixel data in localStorage
        if (settingsResponse.data) {
          localStorage.setItem(
            "pixelData",
            JSON.stringify({
              facebook_pixel: settingsResponse.data.facebook_pixel,
              tiktok_pixel: settingsResponse.data.tiktok_pixel,
            })
          );
        }
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
              {/* {settings?.tiktok_pixel && (
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            ttq.load('${settings.tiktok_pixel}');
            ttq.page();
          }(window, document, 'ttq');
        `,
                  }}
                />
              )} */}

              {/* {settings?.facebook_pixel && (
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', '${settings.facebook_pixel}');
        fbq('track', 'PageView');
      `,
                  }}
                />
              )} */}
            </Head>
            <Header />
            <FloatedLinks />
            <MobileBottomMenu />
            {loading ? <Loader /> : <>{children}</>}
            <Footer />
            <PixelTracker />
          </SelectedCategoryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

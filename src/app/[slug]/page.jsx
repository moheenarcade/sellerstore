"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPageBySlug } from '../../lib/api';
import { useLanguage } from "../../context/LanguageContext";
import Loader from '../../components/loader';

const DynamicPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPageBySlug(slug);
        if (response.success) {
          setPageData(response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <Loader />;
  if (!pageData) return <div>Page not found</div>;

  return (
    <div className="container px-4 md:px-6 2xl:px-28 mx-auto py-12 lg:py-18">
            <h1 className='text-3xl md:text-4xl text-center pb-6 md:pb-12'>{pageData.title}</h1>
      <div 
        className={`prose max-w-none ${language === 'ar' ? 'text-right' : ''}`}
        dangerouslySetInnerHTML={{ 
          __html: language === 'ar' && pageData.details_ar 
            ? pageData.details_ar 
            : pageData.details 
        }} 
      />
    </div>
  );
};

export default DynamicPage;
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

export const PartnersSection = () => {
  const { language } = useLanguage();
  const data = content[language].partners;
  
  const tickerItems = [...data.items, ...data.items];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#414042] text-4xl md:text-5xl font-bold">{data.title}</h2>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradients for fade effect on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-ticker shrink-0">
            {tickerItems.map((partner, idx) => (
              <div 
                key={idx} 
                className="w-64 h-32 mx-4 shrink-0 bg-white border border-[#D1D3D4] rounded-lg flex items-center justify-center text-[#6D6E71] font-medium text-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="flex animate-ticker shrink-0">
            {tickerItems.map((partner, idx) => (
              <div 
                key={idx} 
                className="w-64 h-32 mx-4 shrink-0 bg-white border border-[#D1D3D4] rounded-lg flex items-center justify-center text-[#6D6E71] font-medium text-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
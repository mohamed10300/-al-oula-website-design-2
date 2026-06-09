"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { LogoMark } from './Logo';

export const AboutSection = () => {
  const { language } = useLanguage();
  const data = content[language].about;

  return (
    <section id='about' className='py-24 bg-white relative overflow-hidden'>
      <div className='absolute inset-0 pattern-on-white opacity-50 pointer-events-none' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-[#E40521] text-4xl md:text-5xl font-bold mb-8'>{data.headline}</h2>
            <p className='text-[#414042] text-lg leading-relaxed mb-8'>
              {data.body}
            </p>
            <div className='flex items-center gap-6'>
              <div className='w-16 h-16 rounded-full bg-[#E40521] flex items-center justify-center text-white font-bold font-kanit text-sm text-center leading-tight px-1'>
                2003
              </div>
              <div>
                <div className='text-3xl font-bold text-[#414042] font-kanit'>
                  1.504
                </div>
                <div className='text-[#6D6E71]'>
                  {language === 'ar' ? 'مليار جنيه رأس المال المدفوع' : 'Billion EGP Paid-up Capital'}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, threshold: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex justify-center'
          >
            <LogoMark className='w-64 h-64 text-[#D1D3D4]' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
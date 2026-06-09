"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

export const HeroSection = () => {
  const { language, dir } = useLanguage();
  const data = content[language].hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.slides.length]);

  return (
    <section id='home' className='relative h-screen w-full overflow-hidden bg-[#414042]'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide + language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='absolute inset-0'
        >
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${data.slides[currentSlide].image})` }}
          />
          <div className='absolute inset-0 bg-black/50' />
          
          <div className='relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20'>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='max-w-2xl'
            >
              <h1 className='text-white text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                {data.slides[currentSlide].headline}
              </h1>
              <p className='text-[#D1D3D4] text-xl md:text-2xl mb-10 leading-relaxed'>
                {data.slides[currentSlide].subline}
              </p>
              <button className='bg-[#E40521] hover:bg-[#c0041c] text-white px-8 py-4 rounded font-bold text-lg transition-colors hover:scale-105 transform'>
                {data.slides[currentSlide].cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className='absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10'>
        {data.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentSlide === idx ? 'w-8 bg-[#E40521]' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { Building2, TrendingUp, Briefcase } from 'lucide-react';
import clsx from 'clsx';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  TrendingUp,
  Briefcase,
};

export const ProductsSection = () => {
  const { language } = useLanguage();
  const data = content[language].products;

  return (
    <section id='products' className='py-24 bg-[#F8F9FA] relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.15 }}
          className='text-center mb-16'
        >
          <h2 className='text-[#414042] text-4xl md:text-5xl font-bold'>{data.title}</h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {data.cards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, threshold: 0.15 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className='bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#D1D3D4] flex flex-col items-center text-center group'
              >
                <div 
                  className='w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110'
                  style={{ backgroundColor: card.accent + '1A', color: card.accent }}
                >
                  {Icon && <Icon size={40} />}
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-[#414042]'>{card.title}</h3>
                <p className='text-[#6D6E71] leading-relaxed flex-grow'>{card.desc}</p>
                <button className='mt-8 text-[#E40521] font-bold group-hover:underline'>
                  {data.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

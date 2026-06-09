"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { useCounter } from '@/hooks/useCounter';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const { count, setInView } = useCounter(value);
  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className='text-center'
    >
      <div className='text-5xl font-bold font-kanit mb-2'>+{count.toLocaleString()}</div>
      <div className='text-lg opacity-90'>{label}</div>
    </motion.div>
  );
};

export const CBESection = () => {
  const { language } = useLanguage();
  const data = content[language].cbe;

  return (
    <section className='py-20 bg-[#E40521] relative overflow-hidden text-white'>
      <div className='absolute inset-0 pattern-on-red' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.15 }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>{data.headline}</h2>
            <p className='text-xl opacity-90'>{data.subline}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.15 }}
            className='flex flex-wrap justify-center gap-16 md:justify-end'
          >
            <Counter value={data.stat1Value} label={data.stat1Label} />
            <Counter value={data.stat2Value} label={data.stat2Label} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { useCounter } from '@/hooks/useCounter';

const StatItem = ({ item }: { item: { value: number; label: string; plus: boolean } }) => {
  const { count, setInView } = useCounter(item.value);
  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-5xl md:text-6xl font-bold font-kanit text-[#E40521] mb-4">
        {count.toLocaleString()}{item.plus && '+'}
      </div>
      <div className="text-xl text-[#414042] font-medium">{item.label}</div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const { language } = useLanguage();
  const data = content[language].stats;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-on-white opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#414042] text-4xl md:text-5xl font-bold">{data.title}</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#D1D3D4]/30">
          {data.items.map((item, idx) => (
            <StatItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
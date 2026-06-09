"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { BarChart2, Users, Leaf } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BarChart2,
  Users,
  Leaf,
};

export const CSRSection = () => {
  const { language } = useLanguage();
  const data = content[language].csr;

  return (
    <section className="py-24 bg-[#414042] relative text-white overflow-hidden">
      <div className="absolute inset-0 pattern-on-dark" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{data.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, threshold: 0.15 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: pillar.accent }}
                >
                  {Icon && <Icon size={32} className="text-white" />}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-[#D1D3D4] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

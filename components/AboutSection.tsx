  "use client";
  import React from 'react';
  import { motion } from 'framer-motion';
  import { useLanguage } from '@/context/LanguageContext';
  import { content } from '@/lib/content';

  export const AboutSection = () => {
    const { language } = useLanguage();
    const data = content[language].about;

    return (
      <section id='about' className='bg-white'>

        <div className='py-24 relative overflow-hidden'>
          <div className='absolute inset-0 pattern-on-white opacity-50 pointer-events-none' />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, threshold: 0.15 }}
              transition={{ duration: 0.6 }}
              className='max-w-3xl'
            >
              <h2 className='text-[#E40521] text-4xl md:text-5xl font-bold mb-8'>{data.headline}</h2>
              <p className='text-[#414042] text-lg leading-relaxed mb-8'>{data.body}</p>
              <p className='text-[#6D6E71] text-lg leading-relaxed mb-10'>{data.intro}</p>
              <div className='flex items-center gap-6'>
                <div className='w-16 h-16 rounded-full bg-[#E40521] flex items-center justify-center text-white font-bold font-kanit text-sm text-center leading-tight px-1'>
                  2003
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#414042] font-kanit'>1.504</div>
                  <div className='text-[#6D6E71]'>
                    {language === 'ar' ? 'مليار جنيه رأس المال المدفوع' : 'Billion EGP Paid-up Capital'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='py-20 bg-[#F8F8F8]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-2xl p-10 border border-[#D1D3D4]'
              >
                <div className='w-12 h-1 bg-[#E40521] mb-6' />
                <h3 className='text-2xl font-bold text-[#414042] mb-4'>{data.mission.title}</h3>
                <p className='text-[#6D6E71] leading-relaxed'>{data.mission.body}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='bg-white rounded-2xl p-10 border border-[#D1D3D4]'
              >
                <div className='w-12 h-1 bg-[#E40521] mb-6' />
                <h3 className='text-2xl font-bold text-[#414042] mb-4'>{data.vision.title}</h3>
                <p className='text-[#6D6E71] leading-relaxed'>{data.vision.body}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold text-[#414042] mb-12 text-center'
            >
              {data.values.title}
            </motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {data.values.items.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className='border-t-4 border-[#E40521] bg-[#F8F8F8] rounded-xl p-8'
                >
                  <h4 className='text-xl font-bold text-[#414042] mb-3'>{val.title}</h4>
                  <p className='text-[#6D6E71] leading-relaxed'>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className='py-20 bg-[#F8F8F8]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold text-[#414042] mb-12 text-center'
            >
              {data.shareholders.title}
            </motion.h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {data.shareholders.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className='bg-white border border-[#D1D3D4] rounded-xl p-4 text-center text-[#414042] font-medium text-sm'
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold text-[#414042] mb-12 text-center'
            >
              {data.board.title}
            </motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {data.board.items.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className='flex items-center gap-4 bg-[#F8F8F8] rounded-xl p-6 border border-[#D1D3D4]'
                >
                  <div className='w-10 h-10 rounded-full bg-[#E40521] flex items-center justify-center text-white font-bold text-lg shrink-0'>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className='font-bold text-[#414042]'>{member.name}</div>
                    <div className='text-[#6D6E71] text-sm'>{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className='py-20 bg-[#F8F8F8]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold text-[#414042] mb-12 text-center'
            >
              {data.management.title}
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {data.management.items.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className='bg-white rounded-2xl p-8 border border-[#D1D3D4]'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-[#E40521] flex items-center justify-center text-white font-bold text-xl shrink-0'>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className='font-bold text-[#414042] text-lg'>{member.name}</div>
                      <div className='text-[#E40521] text-sm font-medium'>{member.role}</div>
                    </div>
                  </div>
                  <p className='text-[#6D6E71] text-sm leading-relaxed'>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>
    );
  };

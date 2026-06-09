"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { content } from '@/lib/content';
import { LogoColoredHorizontal } from './Logo';
import { Phone, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export const Navbar = () => {
  const { language, toggleLanguage, dir } = useLanguage();
  const { isScrolled } = useScrollDirection();
  const [isOpen, setIsOpen] = React.useState(false);
  const data = content[language].nav;
  const isRtl = dir === 'rtl';

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D1D3D4] transition-shadow duration-300',
          isScrolled && 'shadow-md'
        )}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between'>
          <div className={clsx('flex items-center gap-6', isRtl ? 'order-3 md:order-1' : 'order-1 md:order-1')}>
            <LogoColoredHorizontal className='h-12 w-auto' />
          </div>

          <nav className={clsx('hidden md:flex items-center gap-8', isRtl ? 'order-2' : 'order-2')}>
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-[#414042] hover:text-[#E40521] font-medium transition-colors relative group'
              >
                {link.label}
                <span
                  className={clsx(
                    'absolute -bottom-1 h-0.5 w-0 bg-[#E40521] transition-all duration-300 group-hover:w-full',
                    isRtl ? 'right-0' : 'left-0'
                  )}
                ></span>
              </a>
            ))}
          </nav>

          <div className={clsx('flex items-center gap-4', isRtl ? 'order-1 md:order-3' : 'order-3 md:order-3')}>
            <a href={`tel:${data.hotline}`} className='hidden md:flex items-center gap-2 text-[#E40521] font-bold'>
              <Phone size={20} />
              <span className='font-kanit'>{data.hotline}</span>
            </a>

            <button
              onClick={toggleLanguage}
              className='relative flex items-center w-16 h-8 rounded-full bg-[#F5F5F5] border border-[#E40521] p-1 overflow-hidden'
              aria-label='Toggle Language'
            >
              <motion.div
                className='absolute w-6 h-6 rounded-full bg-[#E40521]'
                initial={false}
                animate={{
                  x: language === 'ar' ? (isRtl ? 1 : 33) : (isRtl ? 33 : 1),
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <span className={clsx(
                'z-10 text-xs font-bold w-1/2 text-center transition-colors duration-200',
                language === 'ar' ? (isRtl ? 'text-white' : 'text-[#E40521]') : (isRtl ? 'text-[#E40521]' : 'text-white')
              )}>
                {isRtl ? 'عر' : 'EN'}
              </span>
              <span className={clsx(
                'z-10 text-xs font-bold w-1/2 text-center transition-colors duration-200',
                language === 'ar' ? (isRtl ? 'text-[#E40521]' : 'text-white') : (isRtl ? 'text-white' : 'text-[#E40521]')
              )}>
                {isRtl ? 'EN' : 'عر'}
              </span>
            </button>

            <button className='md:hidden text-[#414042]' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='fixed top-20 left-0 right-0 bg-white z-40 border-b border-[#D1D3D4] overflow-hidden md:hidden shadow-lg'
          >
            <div className='flex flex-col px-4 py-6 gap-4'>
              {data.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-[#414042] text-lg font-medium'
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${data.hotline}`} className='flex items-center gap-2 text-[#E40521] font-bold text-lg mt-4 pt-4 border-t border-[#D1D3D4]'>
                <Phone size={20} />
                <span className='font-kanit'>{data.hotline}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
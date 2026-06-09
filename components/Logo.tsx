import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface LogoProps {
  className?: string;
}

interface LogoPropsStatic extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LogoColoredHorizontal = ({ className }: LogoProps) => {
  const { language } = useLanguage();
  const src = language === 'ar' ? '/logo-ar.png' : '/logo-en.png';

  return (
    <Image
      src={src}
      alt='Al-Oula Logo'
      width={180}
      height={60}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  );
};

export const LogoMark = ({ className, ...props }: LogoPropsStatic) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' className={className} fill='none' {...props}>
    <path d='M40 70V50H30V70H20V10H40V30H50V50H60V70H40Z' fill='currentColor' />
  </svg>
);

export const LogoColoredVertical = ({ className }: LogoProps) => {
  const { language } = useLanguage();
  const src = language === 'ar' ? '/logo-ar.png' : '/logo-en.png';

  return (
    <Image
      src={src}
      alt='Al-Oula Logo'
      width={160}
      height={100}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export const LogoWhite = ({ className, ...props }: LogoPropsStatic) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 80' className={className} fill='none' {...props}>
    <path d='M40 70V50H30V70H20V10H40V30H50V50H60V70H40Z' fill='#FFFFFF' />
    <path d='M40 30H50V50H40V30Z' fill='#FFFFFF' fillOpacity='0.8' />
    <path d='M50 50H60V70H50V50Z' fill='#FFFFFF' fillOpacity='0.6' />
  </svg>
);
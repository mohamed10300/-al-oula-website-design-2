import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LogoMark = ({ className, ...props }: LogoProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' className={className} fill='none' {...props}>
    <path d='M40 70V50H30V70H20V10H40V30H50V50H60V70H40Z' fill='currentColor' />
  </svg>
);

export const LogoColoredHorizontal = ({ className, ...props }: LogoProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 80' className={className} fill='none' {...props}>
    <path d='M40 70V50H30V70H20V10H40V30H50V50H60V70H40Z' fill='#414042' />
    <path d='M40 30H50V50H40V30Z' fill='#6D6E71' />
    <path d='M50 50H60V70H50V50Z' fill='#D1D3D4' />
    <text x='80' y='45' fontFamily='var(--font-alexandria)' fontSize='24' fill='#414042' fontWeight='bold'>الأولى</text>
    <text x='160' y='45' fontFamily='var(--font-kanit)' fontSize='20' fill='#414042' fontWeight='bold'>Al-Oula</text>
  </svg>
);

export const LogoColoredVertical = ({ className, ...props }: LogoProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 140' className={className} fill='none' {...props}>
    <path d='M50 80V60H40V80H30V20H50V40H60V60H70V80H50Z' fill='#414042' />
    <path d='M50 40H60V60H50V40Z' fill='#6D6E71' />
    <path d='M60 60H70V80H60V60Z' fill='#D1D3D4' />
    <text x='50' y='110' fontFamily='var(--font-alexandria)' fontSize='20' fill='#414042' fontWeight='bold' textAnchor='middle'>الأولى</text>
    <text x='50' y='130' fontFamily='var(--font-kanit)' fontSize='16' fill='#414042' fontWeight='bold' textAnchor='middle'>Al-Oula</text>
  </svg>
);

export const LogoWhite = ({ className, ...props }: LogoProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 80' className={className} fill='none' {...props}>
    <path d='M40 70V50H30V70H20V10H40V30H50V50H60V70H40Z' fill='#FFFFFF' />
    <path d='M40 30H50V50H40V30Z' fill='#FFFFFF' fillOpacity='0.8' />
    <path d='M50 50H60V70H50V50Z' fill='#FFFFFF' fillOpacity='0.6' />
    <text x='80' y='45' fontFamily='var(--font-alexandria)' fontSize='24' fill='#FFFFFF' fontWeight='bold'>الأولى</text>
    <text x='160' y='45' fontFamily='var(--font-kanit)' fontSize='20' fill='#FFFFFF' fontWeight='bold'>Al-Oula</text>
  </svg>
);
"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { LogoColoredHorizontal } from './Logo';
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock, MapPin } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const data = content[language];

  return (
    <footer className="bg-[#414042] text-white relative overflow-hidden pt-20 pb-8">
      <div className="absolute inset-0 pattern-on-dark" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg p-2 inline-block mb-6">
              <LogoColoredHorizontal className="h-12 w-auto" />
            <div className="mb-6">
  <LogoColoredHorizontal className="h-20 w-auto" />
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{data.footer.col1Title}</h3>
            <ul className="space-y-4">
              {data.nav.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#D1D3D4] hover:text-[#E40521] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">{data.footer.col2Title}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-[#D1D3D4]">
                <MapPin className="text-[#E40521] shrink-0 mt-1" size={20} />
                <span>{data.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 text-[#D1D3D4]">
                <Phone className="text-[#E40521] shrink-0" size={20} />
                <span className="font-kanit">{data.nav.hotline}</span>
              </div>
              <div className="flex items-center gap-3 text-[#D1D3D4]">
                <Mail className="text-[#E40521] shrink-0" size={20} />
                <span className="font-kanit">info@aloula-eg.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#D1D3D4]">
                <Clock className="text-[#E40521] shrink-0" size={20} />
                <span>{data.footer.hours}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E40521] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E40521] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E40521] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[#D1D3D4] text-sm">
          {data.footer.bottomBar}
        </div>
      </div>
    </footer>
  );
};
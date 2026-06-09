import type { Metadata } from 'next';
import { Alexandria, Kanit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const alexandria = Alexandria({ subsets: ['arabic'], variable: '--font-alexandria', weight: ['200', '300', '400', '500', '600', '700', '800'] });
const kanit = Kanit({ subsets: ['latin'], variable: '--font-kanit', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Al-Oula Mockup',
  description: 'Frontend mockup for Al-Oula Mortgage Finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${kanit.variable} font-alexandria`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

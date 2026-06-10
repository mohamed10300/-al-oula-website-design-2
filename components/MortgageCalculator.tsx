"use client";
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const labels = {
  ar: {
    title: 'حاسبة التمويل العقاري',
    subtitle: 'احسب قسطك الشهري بسهولة',
    propertyValue: 'قيمة العقار (جنيه)',
    downPayment: 'نسبة المقدم (%)',
    loanTerm: 'مدة التمويل (سنوات)',
    interestRate: 'معدل الفائدة السنوي (%)',
    calculate: 'احسب',
    monthlyInstallment: 'القسط الشهري',
    loanAmount: 'مبلغ التمويل',
    totalPayment: 'إجمالي المدفوعات',
    totalInterest: 'إجمالي الفائدة',
    currency: 'جنيه',
    disclaimer: '* هذه الأرقام تقديرية وقد تختلف حسب الشروط الفعلية للتمويل.',
  },
  en: {
    title: 'Mortgage Calculator',
    subtitle: 'Calculate your monthly installment easily',
    propertyValue: 'Property Value (EGP)',
    downPayment: 'Down Payment (%)',
    loanTerm: 'Loan Term (Years)',
    interestRate: 'Annual Interest Rate (%)',
    calculate: 'Calculate',
    monthlyInstallment: 'Monthly Installment',
    loanAmount: 'Loan Amount',
    totalPayment: 'Total Payment',
    totalInterest: 'Total Interest',
    currency: 'EGP',
    disclaimer: '* These figures are estimates and may differ based on actual financing terms.',
  },
};

export const MortgageCalculator = () => {
  const { language } = useLanguage();
  const t = labels[language];

  const [propertyValue, setPropertyValue] = useState('');
  const [downPayment, setDownPayment] = useState('20');
  const [loanTerm, setLoanTerm] = useState('10');
  constconst [interestRate, setInterestRate] = useState('24.5');
  const [result, setResult] = useState<{
    monthly: number;
    loanAmount: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculate = useCallback(() => {
    const P = parseFloat(propertyValue.replace(/,/g, '')) * (1 - parseFloat(downPayment) / 100);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!P || !r || !n || P <= 0) return;

    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthly * n;
    const totalInterest = totalPayment - P;

    setResult({
      monthly,
      loanAmount: P,
      totalPayment,
      totalInterest,
    });
  }, [propertyValue, downPayment, loanTerm, interestRate]);

  const fmt = (n: number) =>
    Math.round(n).toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US');

  return (
    <section id='calculator' className='py-24 bg-white relative overflow-hidden'>
      <div className='absolute inset-0 pattern-on-white opacity-40 pointer-events-none' />
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-[#414042] mb-4'>{t.title}</h2>
          <p className='text-[#6D6E71] text-lg'>{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-3xl border border-[#D1D3D4] shadow-lg p-8 md:p-12'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            {/* Property Value */}
            <div>
              <label className='block text-sm font-semibold text-[#414042] mb-2'>{t.propertyValue}</label>
              <input
                type='text'
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder='1,000,000'
                className='w-full border border-[#D1D3D4] rounded-xl px-4 py-3 text-[#414042] focus:outline-none focus:border-[#E40521] transition-colors text-lg'
              />
            </div>

            {/* Down Payment */}
            <div>
              <label className='block text-sm font-semibold text-[#414042] mb-2'>
                {t.downPayment} — {downPayment}%
              </label>
              <input
                type='range'
                min='10'
                max='50'
                step='5'
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className='w-full accent-[#E40521] mt-3'
              />
              <div className='flex justify-between text-xs text-[#6D6E71] mt-1'>
                <span>10%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className='block text-sm font-semibold text-[#414042] mb-2'>
                {t.loanTerm} — {loanTerm}
              </label>
              <input
                type='range'
                min='1'
                max='20'
                step='1'
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className='w-full accent-[#E40521] mt-3'
              />
              <div className='flex justify-between text-xs text-[#6D6E71] mt-1'>
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className='block text-sm font-semibold text-[#414042] mb-2'>
                {t.interestRate} — {interestRate}%
              </label>
              <input
                type='range'
                min='5'
                max='30'
                step='0.5'
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className='w-full accent-[#E40521] mt-3'
              />
              <div className='flex justify-between text-xs text-[#6D6E71] mt-1'>
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className='w-full bg-[#E40521] hover:bg-[#c40420] text-white font-bold text-lg py-4 rounded-xl transition-colors'
          >
            {t.calculate}
          </button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6'
            >
              {[
                { label: t.monthlyInstallment, value: result.monthly, highlight: true },
                { label: t.loanAmount, value: result.loanAmount, highlight: false },
                { label: t.totalPayment, value: result.totalPayment, highlight: false },
                { label: t.totalInterest, value: result.totalInterest, highlight: false },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 text-center ${item.highlight ? 'bg-[#E40521] text-white' : 'bg-[#F8F8F8] text-[#414042]'}`}
                >
                  <div className={`text-2xl font-bold font-kanit mb-1 ${item.highlight ? 'text-white' : 'text-[#E40521]'}`}>
                    {fmt(item.value)}
                  </div>
                  <div className={`text-xs font-semibold mb-1 ${item.highlight ? 'text-white/80' : 'text-[#6D6E71]'}`}>
                    {t.currency}
                  </div>
                  <div className={`text-sm ${item.highlight ? 'text-white/90' : 'text-[#6D6E71]'}`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {result && (
            <p className='text-xs text-[#6D6E71] mt-6 text-center'>{t.disclaimer}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
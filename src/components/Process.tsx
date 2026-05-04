'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, ArrowRight, Phone, Calendar, Wrench, Package } from 'lucide-react';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Phone,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      number: '01'
    },
    {
      icon: Calendar,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      number: '02'
    },
    {
      icon: Package,
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      number: '03'
    },
    {
      icon: Wrench,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      number: '04'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#83bd81]/10">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-7 h-7 text-[#83bd81]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#404e5e] mb-3 relative z-10">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 relative z-10">
                    {t(step.descKey)}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/905403363873?text=${t('whatsapp.offerMessage')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#83bd81] hover:bg-[#6fa36d] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg"
          >
            <CheckCircle className="w-5 h-5" />
            {t('process.cta')}
          </a>
          <p className="text-gray-600 mt-4">
            {t('process.ctaSub')}
          </p>
        </div>
      </div>
    </section>
  );
}

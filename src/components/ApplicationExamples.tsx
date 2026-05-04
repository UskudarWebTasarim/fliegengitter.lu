'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building, Store, Factory, Hotel, Hospital } from 'lucide-react';

export default function ApplicationExamples() {
  const { t } = useLanguage();

  const examples = [
    {
      icon: Home,
      titleKey: 'applications.home.title',
      descKey: 'applications.home.desc',
      featureKeys: ['applications.home.f1', 'applications.home.f2', 'applications.home.f3']
    },
    {
      icon: Building,
      titleKey: 'applications.office.title',
      descKey: 'applications.office.desc',
      featureKeys: ['applications.office.f1', 'applications.office.f2', 'applications.office.f3']
    },
    {
      icon: Store,
      titleKey: 'applications.store.title',
      descKey: 'applications.store.desc',
      featureKeys: ['applications.store.f1', 'applications.store.f2', 'applications.store.f3']
    },
    {
      icon: Factory,
      titleKey: 'applications.factory.title',
      descKey: 'applications.factory.desc',
      featureKeys: ['applications.factory.f1', 'applications.factory.f2', 'applications.factory.f3']
    },
    {
      icon: Hotel,
      titleKey: 'applications.hotel.title',
      descKey: 'applications.hotel.desc',
      featureKeys: ['applications.hotel.f1', 'applications.hotel.f2', 'applications.hotel.f3']
    },
    {
      icon: Hospital,
      titleKey: 'applications.hospital.title',
      descKey: 'applications.hospital.desc',
      featureKeys: ['applications.hospital.f1', 'applications.hospital.f2', 'applications.hospital.f3']
    }
  ];

  return (
    <section id="applications" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('applications.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('applications.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#83bd81] transition-all group">
                <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#83bd81]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#83bd81]" />
                </div>
                <h3 className="text-xl font-bold text-[#404e5e] mb-3">
                  {t(example.titleKey)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(example.descKey)}
                </p>
                <ul className="space-y-2">
                  {example.featureKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#83bd81] rounded-full" />
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
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
            {t('applications.cta')}
          </a>
          <p className="text-gray-600 mt-4">
            {t('applications.ctaSub')}
          </p>
        </div>
      </div>
    </section>
  );
}

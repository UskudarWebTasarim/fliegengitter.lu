'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Truck, CheckCircle } from 'lucide-react';

const countries = [
  { name: 'Deutschland', flag: '🇩🇪', delivery: '4-6 Tage' },
  { name: 'Niederlande', flag: '🇳🇱', delivery: '4-6 Tage' },
  { name: 'Belgien', flag: '🇧🇪', delivery: '3-5 Tage' },
  { name: 'Frankreich', flag: '🇫🇷', delivery: '5-7 Tage' },
  { name: 'Schweiz', flag: '🇨🇭', delivery: '5-7 Tage' },
  { name: 'Österreich', flag: '🇦🇹', delivery: '5-7 Tage' },
  { name: 'Luxemburg', flag: '🇱🇺', delivery: '2-3 Tage' },
  { name: 'Türkei', flag: '🇹🇷', delivery: '7-10 Tage' },
];

export default function Regions() {
  const { t, language } = useLanguage();

  return (
    <section id="regions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#83bd81]/10 text-[#83bd81] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe size={16} />
            <span>{t('regions.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('regions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('regions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-[#83bd81] transition-all hover:shadow-lg"
            >
              <span className="text-4xl mb-3 block">{country.flag}</span>
              <h3 className="font-semibold text-[#404e5e] mb-1">{country.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Truck size={14} />
                {country.delivery}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#404e5e] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#83bd81]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#83bd81]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t('regions.premiumQuality')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('regions.premiumQualityDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#83bd81]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-[#83bd81]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t('regions.fastDelivery')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('regions.fastDeliveryDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#83bd81]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#83bd81]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t('regions.europeWide')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('regions.europeWideDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Clock, Leaf, CheckCircle } from 'lucide-react';

export default function Quality() {
  const { t } = useLanguage();

  return (
    <section id="quality" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('quality.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('quality.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#83bd81]/5 to-white p-8 rounded-2xl border border-[#83bd81]/20">
            <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-[#83bd81]" />
            </div>
            <h3 className="text-xl font-bold text-[#404e5e] mb-3">
              {t('quality.aluminum')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('quality.aluminumDesc')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#83bd81]/5 to-white p-8 rounded-2xl border border-[#83bd81]/20">
            <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-4">
              <Leaf className="w-7 h-7 text-[#83bd81]" />
            </div>
            <h3 className="text-xl font-bold text-[#404e5e] mb-3">
              {t('quality.fabric')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('quality.fabricDesc')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#83bd81]/5 to-white p-8 rounded-2xl border border-[#83bd81]/20">
            <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-[#83bd81]" />
            </div>
            <h3 className="text-xl font-bold text-[#404e5e] mb-3">
              {t('quality.certified')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('quality.certifiedDesc')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#83bd81]/5 to-white p-8 rounded-2xl border border-[#83bd81]/20">
            <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-[#83bd81]" />
            </div>
            <h3 className="text-xl font-bold text-[#404e5e] mb-3">
              {t('quality.durability')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('quality.durabilityDesc')}
            </p>
          </div>
        </div>

        <div className="bg-[#404e5e] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('quality.whyFenetre')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('quality.whyFenetreDesc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#83bd81]" />
                  <span>{t('quality.customMade')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#83bd81]" />
                  <span>{t('quality.professionalInstall')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#83bd81]" />
                  <span>{t('quality.fiveYearWarranty')}</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-[#83bd81]/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-[#83bd81]/30 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#83bd81]">FS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

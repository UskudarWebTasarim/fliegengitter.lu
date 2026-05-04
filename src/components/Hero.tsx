'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#83bd81]/10 text-[#83bd81] px-4 py-2 rounded-full text-sm font-medium">
              <Award size={16} />
              <span>{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#404e5e] leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905403363873?text=Hallo,%20ich%20möchte%20ein%20Angebot%20für%20Fliegengitter%20anfordern."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#83bd81] hover:bg-[#6fa36d] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#404e5e] text-[#404e5e] hover:bg-[#404e5e] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                {t('hero.viewProducts')}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[#83bd81]" />
                <p className="text-sm font-medium text-[#404e5e]">{t('hero.guarantee')}</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[#83bd81]" />
                <p className="text-sm font-medium text-[#404e5e]">{t('hero.delivery')}</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-[#83bd81]" />
                <p className="text-sm font-medium text-[#404e5e]">{t('hero.installation')}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#83bd81]/20 to-[#404e5e]/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#83bd81]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#404e5e]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none">
                  {/* Window Frame */}
                  <rect x="50" y="30" width="300" height="240" rx="8" fill="#f8f9fa" stroke="#404e5e" strokeWidth="4"/>
                  <line x1="200" y1="30" x2="200" y2="270" stroke="#404e5e" strokeWidth="3"/>
                  <line x1="50" y1="150" x2="350" y2="150" stroke="#404e5e" strokeWidth="3"/>
                  
                  {/* Insect Grid Pattern */}
                  <g stroke="#83bd81" strokeWidth="1.5" opacity="0.6">
                    <line x1="50" y1="60" x2="350" y2="60"/>
                    <line x1="50" y1="90" x2="350" y2="90"/>
                    <line x1="50" y1="120" x2="350" y2="120"/>
                    <line x1="50" y1="180" x2="350" y2="180"/>
                    <line x1="50" y1="210" x2="350" y2="210"/>
                    <line x1="50" y1="240" x2="350" y2="240"/>
                    <line x1="80" y1="30" x2="80" y2="270"/>
                    <line x1="110" y1="30" x2="110" y2="270"/>
                    <line x1="140" y1="30" x2="140" y2="270"/>
                    <line x1="170" y1="30" x2="170" y2="270"/>
                    <line x1="230" y1="30" x2="230" y2="270"/>
                    <line x1="260" y1="30" x2="260" y2="270"/>
                    <line x1="290" y1="30" x2="290" y2="270"/>
                    <line x1="320" y1="30" x2="320" y2="270"/>
                  </g>
                  
                  {/* Insect Icons (blocked) */}
                  <circle cx="150" cy="90" r="12" fill="#83bd81" opacity="0.3"/>
                  <circle cx="280" cy="210" r="12" fill="#83bd81" opacity="0.3"/>
                  <text x="150" y="94" textAnchor="middle" fill="#404e5e" fontSize="12">🚫</text>
                  <text x="280" y="214" textAnchor="middle" fill="#404e5e" fontSize="12">🚫</text>
                </svg>
                
                <div className="mt-4 text-center">
                  <p className="text-[#404e5e] font-semibold">{t('hero.system')}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('hero.protection')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

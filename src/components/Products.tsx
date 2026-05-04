'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Sun, Wind, Layers, Zap, Lock, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    nameKey: 'products.fliegengitter',
    descriptionKey: 'products.fliegengitterDesc',
    icon: Shield,
    price: 'ab 45€/m²',
    featuresKey: ['products.custom', 'products.easyInstall', 'products.durable'],
    link: '#fliegengitter-fenster'
  },
  {
    id: 2,
    nameKey: 'products.plissee',
    descriptionKey: 'products.plisseeDesc',
    icon: Layers,
    price: 'ab 65€/m²',
    featuresKey: ['products.spaceSaving', 'products.flexible', 'products.largeOpenings'],
    link: '#plissee-fliegengitter'
  },
  {
    id: 3,
    nameKey: 'products.plisseeJalousie',
    descriptionKey: 'products.plisseeJalousieDesc',
    icon: Sun,
    price: 'ab 55€/m²',
    featuresKey: ['products.sunProtection', 'products.privacy', 'products.energyEfficient'],
    link: '#plissee-jalousie'
  },
  {
    id: 4,
    nameKey: 'products.jalousie',
    descriptionKey: 'products.jalousieDesc',
    icon: Wind,
    price: 'ab 40€/m²',
    featuresKey: ['products.robust', 'products.versatile', 'products.simple'],
    link: '#jalousie-perde'
  },
  {
    id: 5,
    nameKey: 'products.honeycomb',
    descriptionKey: 'products.honeycombDesc',
    icon: Zap,
    price: 'ab 70€/m²',
    featuresKey: ['products.insulation', 'products.energyEfficient', 'products.modern'],
    link: '#honeycomb-perde'
  },
  {
    id: 6,
    nameKey: 'products.duet',
    descriptionKey: 'products.duetDesc',
    icon: Lock,
    price: 'ab 75€/m²',
    featuresKey: ['products.double', 'products.practical', 'products.stylish'],
    link: '#duet-perde'
  },
  {
    id: 7,
    nameKey: 'products.zip',
    descriptionKey: 'products.zipDesc',
    icon: CheckCircle,
    price: 'ab 85€/m²',
    featuresKey: ['products.windProof', 'products.stable', 'products.weatherResistant'],
    link: '#zip-perde'
  }
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <a
                key={product.id}
                href={product.link}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#83bd81] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#83bd81]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#83bd81] transition-colors">
                  <Icon className="w-7 h-7 text-[#83bd81] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#404e5e] mb-2">
                  {t(product.nameKey)}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(product.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.featuresKey.map((featureKey, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {t(featureKey)}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-[#83bd81]">{product.price}</span>
                  <span className="text-[#404e5e] font-medium group-hover:text-[#83bd81] transition-colors">
                    {t('products.details')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

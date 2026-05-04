'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Maria Schmidt',
      location: 'Luxemburg',
      date: 'Dezember 2024',
      rating: 5,
      text: 'Hervorragende Qualität und professionelle Montage. Die Fliegengitter sitzen perfekt und halten die Insekten draußen. Sehr empfehlenswert!'
    },
    {
      name: 'Ahmet Yılmaz',
      location: 'Türkei',
      date: 'November 2024',
      rating: 5,
      text: 'Profesyonel hizmet ve kaliteli ürünler. Sineklikler mükemmel oturdu ve böcekleri dışarıda tutuyor. Kesinlikle tavsiye ediyorum!'
    },
    {
      name: 'Jean Dupont',
      location: 'Frankreich',
      date: 'Oktober 2024',
      rating: 5,
      text: 'Excellent qualité et installation professionnelle. Les moustiquaires sont parfaitement ajustées et gardent les insectes à l\'extérieur. Très recommandé!'
    },
    {
      name: 'Thomas Müller',
      location: 'Deutschland',
      date: 'September 2024',
      rating: 5,
      text: 'Top Qualität und schneller Service. Die Monteure waren sehr professionell und freundlich. Werden wieder bestellen!'
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-6 right-6 text-[#83bd81]/20">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                "{review.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-[#404e5e]">
                  {review.name}
                </div>
                <div className="text-sm text-gray-500">
                  {review.location} • {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/905403363873?text=${t('whatsapp.offerMessage')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#83bd81] hover:bg-[#6fa36d] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg"
          >
            {t('reviews.cta')}
          </a>
          <p className="text-gray-600 mt-4">
            {t('reviews.ctaSub')}
          </p>
        </div>
      </div>
    </section>
  );
}

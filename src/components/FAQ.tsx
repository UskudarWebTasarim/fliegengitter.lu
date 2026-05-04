'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Was kostet ein Fliegengitter Fenster?',
    questionTr: 'Fliegengitter Fenster fiyatı ne kadar?',
    answer: 'Die Preise für Fliegengitter Fenster variieren je nach Größe, Material und Montageart. Durchschnittlich kosten Sie zwischen 45€ und 85€ pro Quadratmeter inklusive Montage. Für ein genaues Angebot kontaktieren Sie uns bitte per WhatsApp oder Telefon.',
    answerTr: 'Fliegengitter Fenster fiyatları boyuta, malzemeye ve montaj türüne göre değişir. Ortalama olarak montaj dahil her metre kare için 45€ ile 85€ arasındadır. Kesin fiyat için WhatsApp veya telefon ile iletişime geçin.',
  },
  {
    id: 2,
    question: 'Wie lange dauert die Lieferung nach Luxemburg?',
    questionTr: 'Lüksemburg\'a teslimat ne kadar sürer?',
    answer: 'Nach Luxemburg liefern wir innerhalb von 2-3 Werktagen. In andere europäische Länder beträgt die Lieferzeit 4-10 Tage, je nach Zielort und Zollabfertigung.',
    answerTr: 'Lüksemburg\'a 2-3 iş günü içinde teslimat yapıyoruz. Diğer Avrupa ülkelerine teslimat süresi hedef ülkeye ve gümrükleme işlemlerine göre 4-10 gün arasında değişir.',
  },
  {
    id: 3,
    question: 'Bieten Sie Montage an?',
    questionTr: 'Montaj hizmeti sunuyor musunuz?',
    answer: 'Ja, wir bieten professionelle Montage durch erfahrene Techniker in Luxemburg und Umgebung an. Die Montage ist im Preis inbegriffen und wird sauber und fachgerecht durchgeführt.',
    answerTr: 'Evet, Lüksemburg ve çevresinde deneyimli teknisyenler tarafından profesyonel montaj hizmeti sunuyoruz. Montaj fiyata dahildir ve temiz, ustaca bir şekilde gerçekleştirilir.',
  },
  {
    id: 4,
    question: 'Welche Garantie bieten Sie?',
    questionTr: 'Ne tür garanti sunuyorsunuz?',
    answer: 'Alle unsere Produkte kommen mit einer 5-jährigen Herstellergarantie. Diese deckt Materialfehler und Probleme durch normalen Gebrauch ab.',
    answerTr: 'Tüm ürünlerimiz 5 yıllık üretici garantisi ile birlikte gelir. Bu garanti malzeme hatalarını ve normal kullanımdan kaynaklanan sorunları kapsar.',
  },
  {
    id: 5,
    question: 'Können Sie Maße vor Ort nehmen?',
    questionTr: 'Yerinde ölçü alabilir misiniz?',
    answer: 'Ja, unser Team kommt gerne zu Ihnen vorbei, um die genauen Maße zu nehmen und eine persönliche Beratung durchzuführen. Kontaktieren Sie uns für einen Termin.',
    answerTr: 'Evet, ekibimiz kesin ölçüleri almak ve kişisel danışmanlık yapmak için gelmekten mutluluk duyar. Randevu için bizimle iletişime geçin.',
  },
  {
    id: 6,
    question: 'Sind die Produkte für Haustiere geeignet?',
    questionTr: 'Ürünler evcil hayvanlar için uygun mu?',
    answer: 'Ja, wir bieten spezielle, reißfeste Materialien für Haustierbesitzer an. Diese sind besonders widerstandsfähig gegen Kratzer und Bisse.',
    answerTr: 'Evet, evcil hayvan sahipleri için özel, yırtılmaz malzemeler sunuyoruz. Bu malzemeler tırmalamalara ve ısırıklara karşı özellikle dayanıklıdır.',
  },
];

export default function FAQ() {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            {language === 'de' ? 'Häufig Gestellte Fragen' : 'Sıkça Sorulan Sorular'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'de'
              ? 'Finden Sie Antworten auf die häufigsten Fragen zu unseren Fliegengittern und Dienstleistungen.'
              : 'Sinekliklerimiz ve hizmetlerimiz hakkında en sık sorulan soruların yanıtlarını bulun.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#83bd81]/30 transition-all"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#404e5e] pr-4">
                  {language === 'de' ? faq.question : faq.questionTr}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-[#83bd81] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'de' ? faq.answer : faq.answerTr}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {language === 'de'
              ? 'Haben Sie weitere Fragen? Kontaktieren Sie uns!'
              : 'Başka sorularınız mı var? Bizimle iletişime geçin!'}
          </p>
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6fa36d] text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MobileBottomBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <div className="flex">
        <a
          href="tel:+905403363873"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#404e5e] text-white font-medium"
        >
          <Phone size={20} />
          <span>{t('mobileBottomBar.phone')}</span>
        </a>
        <a
          href="https://wa.me/905403363873"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-medium"
        >
          <MessageCircle size={20} />
          <span>{t('mobileBottomBar.whatsapp')}</span>
        </a>
      </div>
    </div>
  );
}

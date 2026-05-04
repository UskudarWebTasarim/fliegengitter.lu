'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Popup
    'popup.title': 'Willkommen',
    'popup.subtitle': 'Wählen Sie Ihre Sprache',
    'popup.becomePartner': 'Diese Webseite kostenlos besitzen? Werden Sie jetzt unser Partner!',
    'popup.whatsapp': 'WhatsApp',
    'popup.german': 'Deutsch',
    'popup.turkish': 'Türkçe',
    'popup.whatsappMessage': 'Merhaba,%20bayilik%20hakkında%20bilgi%20almak%20istiyorum.',

    // Header
    'header.home': 'Startseite',
    'header.products': 'Produkte',
    'header.about': 'Über uns',
    'header.contact': 'Kontakt',
    'header.brandName': 'Fliegengitter.lu',
    'header.switchToTr': 'Türkçe\'ye geç',
    'header.switchToDe': 'Auf Deutsch',

    // Hero
    'hero.badge': 'Premium Qualität aus Luxemburg',
    'hero.title': 'Fliegengitter Luxemburg - Professioneller Insektenschutz für Ihr Zuhause',
    'hero.subtitle': 'Maßgefertigte Fliegengitter Fenster und Luxemburg Plise Sineklik Lösungen. Premium Qualität, professionelle Montage in ganz Luxemburg.',
    'hero.cta': 'Kostenloses Angebot anfordern',
    'hero.viewProducts': 'Produkte ansehen',
    'hero.guarantee': '5 Jahre Garantie',
    'hero.delivery': 'Kostenlose Lieferung',
    'hero.installation': 'Professionelle Montage',
    'hero.system': 'Fliegengitter Fenster System',
    'hero.protection': 'Effektiver Insektenschutz',

    // Products
    'products.title': 'Luxemburg Fliegengitter - Premium Produkte',
    'products.subtitle': 'Hochwertige Luxemburg Plise Sineklik Lösungen für jeden Bedarf',
    'products.fliegengitter': 'Fliegengitter Fenster',
    'products.fliegengitterDesc': 'Hochwertige Insektenschutzgitter für Fenster in verschiedenen Ausführungen. Maßgefertigt für perfekten Sitz.',
    'products.plissee': 'Plissee Fliegengitter',
    'products.plisseeDesc': 'Plissee-Insektenschutz für große Öffnungen. Platzsparend und flexibel einsetzbar.',
    'products.plisseeJalousie': 'Plissee-Jalousien',
    'products.plisseeJalousieDesc': 'Stilvolle Plissee-Jalousien für Sonnenschutz und Sichtschutz. Energieeffizient.',
    'products.jalousie': 'Jalousien',
    'products.jalousieDesc': 'Klassische Jalousien in verschiedenen Materialien. Robust und langlebig.',
    'products.honeycomb': 'Wabenstoren',
    'products.honeycombDesc': 'Wabenstruktur für maximale Isolierung. Ideal für Energieeffizienz.',
    'products.duet': 'Duo-Jalousien',
    'products.duetDesc': 'Doppelte Funktionalität - Sonnenschutz und Sichtschutz in einem System.',
    'products.zip': 'Zip-Jalousien',
    'products.zipDesc': 'Zip-System für perfekten Halt auch bei starkem Wind. Für Terrassen und Balkone.',
    'products.details': 'Details →',
    'products.custom': 'Maßgefertigt',
    'products.easyInstall': 'Einfache Montage',
    'products.durable': 'Langlebig',
    'products.spaceSaving': 'Platzsparend',
    'products.flexible': 'Flexibel',
    'products.largeOpenings': 'Große Öffnungen',
    'products.sunProtection': 'Sonnenschutz',
    'products.privacy': 'Sichtschutz',
    'products.energyEfficient': 'Energieeffizient',
    'products.robust': 'Robust',
    'products.versatile': 'Vielseitig',
    'products.simple': 'Einfach',
    'products.insulation': 'Isolierung',
    'products.modern': 'Modern',
    'products.double': 'Zweifach',
    'products.practical': 'Praktisch',
    'products.stylish': 'Stilvoll',
    'products.windProof': 'Windfest',
    'products.stable': 'Stabil',
    'products.weatherResistant': 'Wetterbeständig',

    // Process
    'process.title': 'So Funktioniert\'s',
    'process.subtitle': 'In 4 einfachen Schritten zu Ihrem perfekten Insektenschutz',
    'process.step1.title': 'Kontaktaufnahme',
    'process.step1.desc': 'Rufen Sie uns an oder senden Sie uns eine Nachricht über WhatsApp. Wir beraten Sie kostenlos und unverbindlich zu Ihren Anforderungen.',
    'process.step2.title': 'Vermessung',
    'process.step2.desc': 'Wir vereinbaren einen Termin mit Ihnen zur kostenlosen Vermessung Ihrer Fenster. Unsere Experten nehmen präzise Maße vor Ort.',
    'process.step3.title': 'Produktion',
    'process.step3.desc': 'Ihre Fliegengitter werden nach Maß in unserer modernen Produktionsstätte hergestellt. Hochwertige Materialien garantieren Langlebigkeit.',
    'process.step4.title': 'Montage',
    'process.step4.desc': 'Unsere erfahrenen Techniker installieren Ihre Fliegengitter fachgerecht und sauber. Schnell, zuverlässig und mit Garantie.',
    'process.cta': 'Jetzt Angebot anfordern',
    'process.ctaSub': 'Kostenlose Beratung und unverbindliches Angebot',

    // Application Examples
    'applications.title': 'Vielseitige Anwendungen',
    'applications.subtitle': 'Perfekter Insektenschutz für jedes Gebäude und jede Fensterart',
    'applications.home.title': 'Privathäuser',
    'applications.home.desc': 'Ideal für Einfamilienhäuser, Reihenhäuser und Mehrfamilienhäuser. Schützen Sie Ihr Zuhause vor Insekten und genießen Sie frische Luft.',
    'applications.home.f1': 'Maßgeschneiderte Lösungen',
    'applications.home.f2': 'Diskrete Montage',
    'applications.home.f3': 'Kindersichere Ausführung',
    'applications.office.title': 'Bürogebäude',
    'applications.office.desc': 'Professioneller Insektenschutz für Büros und Verwaltungsgebäude. Verbessern Sie das Arbeitsklima und erhöhen Sie den Komfort.',
    'applications.office.f1': 'Brandschutzkonform',
    'applications.office.f2': 'Robuste Ausführung',
    'applications.office.f3': 'Wartungsarm',
    'applications.store.title': 'Geschäfte & Restaurants',
    'applications.store.desc': 'Hygienische Insektenschutzlösungen für Gastronomie und Einzelhandel. Erfüllen Sie alle Vorschriften und bieten Sie Ihren Kunden Komfort.',
    'applications.store.f1': 'Lebensmittelecht',
    'applications.store.f2': 'Einfache Reinigung',
    'applications.store.f3': 'Hochwertiges Design',
    'applications.factory.title': 'Industrieanlagen',
    'applications.factory.desc': 'Spezielle Lösungen für Produktionsstätten und Lagerhallen. Robust und langlebig für anspruchsvolle Umgebungen.',
    'applications.factory.f1': 'Industriestandard',
    'applications.factory.f2': 'Stabil und widerstandsfähig',
    'applications.factory.f3': 'Maßgefertigt',
    'applications.hotel.title': 'Hotels & Pensionen',
    'applications.hotel.desc': 'Steigern Sie den Komfort Ihrer Gäste mit hochwertigem Insektenschutz. Perfekt für Hotelzimmer, Suiten und Gemeinschaftsbereiche.',
    'applications.hotel.f1': 'Langlebig',
    'applications.hotel.f2': 'Elegantes Design',
    'applications.hotel.f3': 'Geräuscharm',
    'applications.hospital.title': 'Krankenhäuser & Kliniken',
    'applications.hospital.desc': 'Spezielle Insektenschutzlösungen für medizinische Einrichtungen. Erfüllen Sie alle Hygienevorschriften und schützen Sie Patienten.',
    'applications.hospital.f1': 'Hygienezertifiziert',
    'applications.hospital.f2': 'Antibakteriell',
    'applications.hospital.f3': 'Leicht zu desinfizieren',
    'applications.cta': 'Passende Lösung finden',
    'applications.ctaSub': 'Wir beraten Sie kostenlos für Ihre spezifischen Anforderungen',

    // Reviews
    'reviews.title': 'Kundenbewertungen',
    'reviews.subtitle': 'Was unsere Kunden über uns sagen',
    'reviews.cta': 'Jetzt Angebot anfordern',
    'reviews.ctaSub': 'Werden Sie unser nächster zufriedener Kunde',

    // Quality
    'quality.title': 'Premium Qualität & Materialien',
    'quality.subtitle': 'Nur die besten Materialien für langlebigen Insektenschutz',
    'quality.aluminum': 'Hochwertige Aluminiumprofile',
    'quality.aluminumDesc': 'Unsere Rahmen werden aus pulverbeschichtetem Aluminium gefertigt, das extrem widerstandsfähig gegen Witterungseinflüsse ist. Das Material rostet nicht und behält seine Farbe über Jahre.',
    'quality.fabric': 'Umweltfreundliche Gewebe',
    'quality.fabricDesc': 'Die Insektenschutzgewebe bestehen aus recycelbaren Materialien und sind frei von schädlichen Chemikalien. Sie sind langlebig, waschbar und behalten ihre Form.',
    'quality.certified': 'Zertifizierte Qualität',
    'quality.certifiedDesc': 'Alle unsere Produkte erfüllen die strengen europäischen Normen (CE-zertifiziert) und werden regelmäßig auf Qualität und Sicherheit geprüft.',
    'quality.durability': 'Langlebigkeit Garantie',
    'quality.durabilityDesc': 'Mit unserer 5-jährigen Garantie sind Sie auf der sicheren Seite. Unsere Produkte sind für den täglichen Gebrauch konzipiert und halten Jahre.',
    'quality.whyFenetre': 'Warum Fenetre Systems?',
    'quality.whyFenetreDesc': 'Fenetre Systems ist ein führender Hersteller von Insektenschutzlösungen mit über 10 Jahren Erfahrung. Alle Produkte werden in der Türkei nach höchsten Standards gefertigt und in ganz Europa geliefert.',
    'quality.customMade': 'Maßgefertigte Lösungen',
    'quality.professionalInstall': 'Professionelle Montage',
    'quality.fiveYearWarranty': '5 Jahre Garantie',

    // Regions
    'regions.badge': 'Europaweite Lieferung',
    'regions.title': 'Unsere Liefergebiete',
    'regions.subtitle': 'Wir liefern in alle europäischen Länder direkt zu Ihrer Haustür. Professionelle Verpackung und schnelle Lieferung garantiert.',
    'regions.premiumQuality': 'Premium Qualität',
    'regions.premiumQualityDesc': 'Alle Produkte erfüllen die europäischen Qualitätsstandards und sind zertifiziert.',
    'regions.fastDelivery': 'Schnelle Lieferung',
    'regions.fastDeliveryDesc': 'Lieferung innerhalb von 4-10 Tagen in ganz Europa, direkt zu Ihrer Haustür.',
    'regions.europeWide': 'Europaweit',
    'regions.europeWideDesc': 'Wir beliefern Kunden in allen europäischen Ländern zuverlässig und pünktlich.',

    // About
    'about.title': 'Über Uns',
    'about.subtitle': 'Wir sind Ihr zuverlässiger Partner für professionellen Insektenschutz aus Luxemburg. Seit Jahren bieten wir hochwertige, maßgefertigte Fliegengitterlösungen für private und gewerbliche Kunden in ganz Europa.',
    'about.guarantee': '5 Jahre Garantie',
    'about.guaranteeDesc': 'Alle unsere Produkte kommen mit einer umfassenden 5-jährigen Herstellergarantie. Wir stehen für Qualität und Zuverlässigkeit - bei Problemen sind wir jederzeit für Sie da.',
    'about.delivery': 'Europaweite Lieferung',
    'about.deliveryDesc': 'Wir liefern in ganz Europa innerhalb von 4-10 Tagen direkt zu Ihnen. Unsere effiziente Logistik garantiert pünktliche Lieferung, egal ob in Luxemburg, Deutschland, Frankreich, Belgien oder anderen EU-Ländern.',
    'about.installation': 'Professionelle Montage',
    'about.installationDesc': 'Fachgerechte Montage durch erfahrene Techniker in Ihrer Region. Unsere Experten installieren Ihre Fliegengitter präzise, sauber und effizient - inklusive Einweisung und Pflegehinweisen.',

    // MobileBottomBar
    'mobileBottomBar.phone': 'Telefon',
    'mobileBottomBar.whatsapp': 'WhatsApp',

    // WhatsApp Messages
    'whatsapp.offerMessage': 'Hallo,%20ich%20möchte%20ein%20Angebot%20für%20Fliegengitter%20anfordern.',

    // Contact
    'contact.title': 'Bereit für ein kostenloses Angebot?',
    'contact.subtitle': 'Kontaktieren Sie uns jetzt für eine unverbindliche Beratung und ein maßgeschneidertes Angebot. Unsere Experten beraten Sie persönlich zu Ihren Anforderungen, empfehlen die passenden Lösungen und erstellen Ihnen ein detailliertes Angebot - ganz ohne Kosten und Verpflichtungen.',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Anrufen',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.contact': 'Kontakt',
    'footer.address': 'Adresse',
    'footer.description': 'Premium Insektenschutzlösungen aus Luxemburg. Maßgefertigt für Ihr Zuhause.',
    'footer.links': 'Links',
    'footer.manufacturer': 'Hersteller',
    'footer.manufacturerDesc': 'Alle Produkte werden von Fenetre Systems professionell gefertigt.',
  },
  tr: {
    // Popup
    'popup.title': 'Hoş Geldiniz',
    'popup.subtitle': 'Dilinizi Seçin',
    'popup.becomePartner': 'Bu Web Sitesine Ücretsiz Sahip Olmak İçin Hemen Şimdi Bayimiz Olun!',
    'popup.whatsapp': 'WhatsApp',
    'popup.german': 'Deutsch',
    'popup.turkish': 'Türkçe',
    'popup.whatsappMessage': 'Merhaba,%20bayilik%20hakkında%20bilgi%20almak%20istiyorum.',

    // Header
    'header.home': 'Ana Sayfa',
    'header.products': 'Ürünler',
    'header.about': 'Hakkımızda',
    'header.contact': 'İletişim',
    'header.brandName': 'Fliegengitter.lu',
    'header.switchToTr': 'Türkçe\'ye geç',
    'header.switchToDe': 'Auf Deutsch',

    // Hero
    'hero.badge': 'Lüksemburg\'tan Premium Kalite',
    'hero.title': 'Lüksemburg Sineklik - Eviniz İçin Profesyonel Insektenschutz',
    'hero.subtitle': 'Lüksemburg plise sineklik ve Lüksemburg plise perde çözümleri. Pencereler, kapılar ve teraslar için ölçüye özel sineklik.',
    'hero.cta': 'Ücretsiz Teklif Alın',
    'hero.viewProducts': 'Ürünleri Görün',
    'hero.guarantee': '5 Yıl Garanti',
    'hero.delivery': 'Ücretsiz Teslimat',
    'hero.installation': 'Profesyonel Montaj',
    'hero.system': 'Fliegengitter Pencere Sistemi',
    'hero.protection': 'Etkili Sineklik Koruması',

    // Products
    'products.title': 'Lüksemburg Sineklik - Premium Ürünler',
    'products.subtitle': 'Lüksemburg plise perde ve sineklik çözümleri her ihtiyaç için',
    'products.fliegengitter': 'Sineklik',
    'products.fliegengitterDesc': 'Yüksek kaliteli sineklikler, çeşitli tiplerde. Mükemmel uyum için ölçüye özel üretim.',
    'products.plissee': 'Plise Sineklik',
    'products.plisseeDesc': 'Büyük açıklıklar için plise sineklik. Alan tasarruflu ve esnek kullanım.',
    'products.plisseeJalousie': 'Plise Perde',
    'products.plisseeJalousieDesc': 'Şık plise jaluziler, güneş ve görünürlük koruması için. Enerji verimli.',
    'products.jalousie': 'Jaluzi Perde',
    'products.jalousieDesc': 'Çeşitli malzemelerde klasik jaluziler. Dayanıklı ve uzun ömürlü.',
    'products.honeycomb': 'Petek Perde',
    'products.honeycombDesc': 'Maksimum yalıtım için petek yapı. Enerji verimliliği için ideal.',
    'products.duet': 'Düet Perde',
    'products.duetDesc': 'Çift fonksiyon - Güneş ve görünürlük koruması tek sistemde.',
    'products.zip': 'Zip Perde',
    'products.zipDesc': 'Güçlü rüzgarda bile mükemmel tutunma için zip sistemi. Teras ve balkonlar için.',
    'products.details': 'Detaylar →',
    'products.custom': 'Özel Üretim',
    'products.easyInstall': 'Kolay Montaj',
    'products.durable': 'Uzun Ömürlü',
    'products.spaceSaving': 'Alan Tasarruflu',
    'products.flexible': 'Esnek',
    'products.largeOpenings': 'Büyük Açıklıklar',
    'products.sunProtection': 'Güneş Koruması',
    'products.privacy': 'Görünürlük Koruması',
    'products.energyEfficient': 'Enerji Verimli',
    'products.robust': 'Sağlam',
    'products.versatile': 'Çok Yönlü',
    'products.simple': 'Basit',
    'products.insulation': 'Yalıtım',
    'products.modern': 'Modern',
    'products.double': 'Çift',
    'products.practical': 'Pratik',
    'products.stylish': 'Şık',
    'products.windProof': 'Rüzgar Dayanıklı',
    'products.stable': 'Stabil',
    'products.weatherResistant': 'Hava Dayanıklı',

    // Process
    'process.title': 'Nasıl Çalışır?',
    'process.subtitle': '4 basit adımda mükemmel sineklik korumanıza',
    'process.step1.title': 'İletişim',
    'process.step1.desc': 'Bizi arayın veya WhatsApp üzerinden mesaj gönderin. Gereksinimleriniz hakkında ücretsiz ve bağlayıcı olmayan danışmanlık sağlıyoruz.',
    'process.step2.title': 'Ölçü',
    'process.step2.desc': 'Pencereleriniz için ücretsiz ölçü için randevu alıyoruz. Uzmanlarımız yerinde hassas ölçüler alıyor.',
    'process.step3.title': 'Üretim',
    'process.step3.desc': 'Sineklikleriniz modern üretim tesisimizde ölçüye özel olarak üretiliyor. Yüksek kaliteli malzemeler uzun ömür garantiliyor.',
    'process.step4.title': 'Montaj',
    'process.step4.desc': 'Deneyimli teknisyenlerimiz sinekliklerinizi profesyonel ve temiz bir şekilde kuruyor. Hızlı, güvenilir ve garantili.',
    'process.cta': 'Hemen Teklif İsteyin',
    'process.ctaSub': 'Ücretsiz danışmanlık ve bağlayıcı olmayan teklif',

    // Application Examples
    'applications.title': 'Çeşitli Uygulamalar',
    'applications.subtitle': 'Her bina ve her pencere tipi için mükemmel sineklik koruması',
    'applications.home.title': 'Özel Konutlar',
    'applications.home.desc': 'Müstakil evler, sıra evleri ve apartmanlar için ideal. Evinizi böceklerden koruyun ve temiz havanın tadını çıkarın.',
    'applications.home.f1': 'Özel ölçü çözümler',
    'applications.home.f2': 'Gizli montaj',
    'applications.home.f3': 'Çocuk güvenli',
    'applications.office.title': 'Ofis Binaları',
    'applications.office.desc': 'Ofisler ve yönetim binaları için profesyonel sineklik koruması. Çalışma ortamını iyileştirin ve konforu artırın.',
    'applications.office.f1': 'Yangın güvenliği',
    'applications.office.f2': 'Sağlam yapı',
    'applications.office.f3': 'Az bakım',
    'applications.store.title': 'Mağazalar & Restoranlar',
    'applications.store.desc': 'Gastronomi ve perakende için hijyenik sineklik koruma çözümleri. Tüm düzenlemeleri karşılayın ve müşterilerinize konfor sunun.',
    'applications.store.f1': 'Gıda güvenliği',
    'applications.store.f2': 'Kolay temizlik',
    'applications.store.f3': 'Yüksek kaliteli tasarım',
    'applications.factory.title': 'Endüstriyel Tesisler',
    'applications.factory.desc': 'Üretim tesisleri ve depolar için özel çözümler. Zorlu ortamlar için sağlam ve uzun ömürlü.',
    'applications.factory.f1': 'Endüstri standardı',
    'applications.factory.f2': 'Stabil ve dayanıklı',
    'applications.factory.f3': 'Özel ölçü',
    'applications.hotel.title': 'Oteller & Pansiyonlar',
    'applications.hotel.desc': 'Yüksek kaliteli sineklik korumasıyla misafir konforunu artırın. Oda odaları, suitler ve ortak alanlar için mükemmel.',
    'applications.hotel.f1': 'Uzun ömürlü',
    'applications.hotel.f2': 'Elegan tasarım',
    'applications.hotel.f3': 'Sessiz',
    'applications.hospital.title': 'Hastaneler & Klinikler',
    'applications.hospital.desc': 'Tıbbi tesisler için özel sineklik koruma çözümleri. Tüm hijyen kurallarını karşılayın ve hastaları koruyun.',
    'applications.hospital.f1': 'Hijyen sertifikalı',
    'applications.hospital.f2': 'Antibakteriyel',
    'applications.hospital.f3': 'Kolay dezenfeksiyon',
    'applications.cta': 'Uygun Çözümü Bulun',
    'applications.ctaSub': 'Özel gereksinimleriniz için ücretsiz danışmanlık',

    // Reviews
    'reviews.title': 'Müşteri Yorumları',
    'reviews.subtitle': 'Müşterilerimiz bizim hakkında ne söylüyor',
    'reviews.cta': 'Hemen Teklif İsteyin',
    'reviews.ctaSub': 'Bir sonraki memnun müşterimiz olun',

    // Quality
    'quality.title': 'Premium Kalite ve Malzemeler',
    'quality.subtitle': 'Uzun ömürlü sineklik için sadece en iyi malzemeler',
    'quality.aluminum': 'Yüksek Kaliteli Alüminyum Profiller',
    'quality.aluminumDesc': 'Çerçevelerimiz hava koşullarına karşı son derece dayanıklı toz boya kaplı alüminyumdan üretilir. Malzeme paslanmaz ve yıllarca rengini korur.',
    'quality.fabric': 'Çevre Dostu Kumaşlar',
    'quality.fabricDesc': 'Sineklik kumaşları geri dönüştürülebilir malzemelerden üretilir ve zararlı kimyasallar içermez. Uzun ömürlü, yıkanabilir ve formunu korur.',
    'quality.certified': 'Sertifikalı Kalite',
    'quality.certifiedDesc': 'Tüm ürünlerimiz sıkı Avrupa normlarını karşılar (CE sertifikalı) ve kalite ve güvenlik açısından düzenli olarak test edilir.',
    'quality.durability': 'Uzun Ömür Garantisi',
    'quality.durabilityDesc': '5 yıllık garantisimizle güvendesiniz. Ürünlerimiz günlük kullanım için tasarlanmıştır ve yıllarca dayanır.',
    'quality.whyFenetre': 'Neden Fenetre Systems?',
    'quality.whyFenetreDesc': 'Fenetre Systems, 10 yılı aşkın deneyime sahip önde gelen bir sineklik çözümleri üreticisidir. Tüm ürünler Türkiye\'de en yüksek standartlara göre üretilir ve tüm Avrupa\'ya teslim edilir.',
    'quality.customMade': 'Ölçüye Özel Çözümler',
    'quality.professionalInstall': 'Profesyonel Montaj',
    'quality.fiveYearWarranty': '5 Yıl Garanti',

    // Regions
    'regions.badge': 'Avrupa Çapında Teslimat',
    'regions.title': 'Teslimat Bölgelerimiz',
    'regions.subtitle': 'Tüm Avrupa ülkelerine kapınıza kadar teslimat. Profesyonel paketleme ve hızlı teslimat garantili.',
    'regions.premiumQuality': 'Premium Kalite',
    'regions.premiumQualityDesc': 'Tüm ürünler Avrupa kalite standartlarına uyar ve sertifikalıdır.',
    'regions.fastDelivery': 'Hızlı Teslimat',
    'regions.fastDeliveryDesc': 'Tüm Avrupa\'da 4-10 gün içinde kapınıza kadar teslimat.',
    'regions.europeWide': 'Avrupa Çapında',
    'regions.europeWideDesc': 'Tüm Avrupa ülkelerindeki müşterilere güvenilir ve zamanında teslimat.',

    // About
    'about.title': 'Hakkımızda',
    'about.subtitle': 'Lüksemburg\'tan profesyonel sineklik koruması için güvenilir ortağınız. Yıllardır tüm Avrupa\'daki özel ve ticari müşteriler için yüksek kaliteli, ölçüye özel sineklik çözümleri sunuyoruz.',
    'about.guarantee': '5 Yıl Garanti',
    'about.guaranteeDesc': 'Tüm ürünlerimiz kapsamlı 5 yıllık üretici garantisi ile birlikte gelir. Kalite ve güvenilirlik için çalışıyoruz - sorunlarınızda her zaman yanınızdayız.',
    'about.delivery': 'Avrupa Çapında Teslimat',
    'about.deliveryDesc': '4-10 gün içinde tüm Avrupa\'ya doğrudan teslimat yapıyoruz. Etkili lojistik sistemimiz, Lüksemburg, Almanya, Fransa, Belçika veya diğer AB ülkelerinde zamanında teslimat garantiler.',
    'about.installation': 'Profesyonel Montaj',
    'about.installationDesc': 'Bölgenizdeki deneyimli teknisyenler tarafından uzman montaj. Uzmanlarımız sinekliklerinizi hassas, temiz ve verimli bir şekilde kurar - kullanım talimatları ve bakım ipuçları dahil.',

    // MobileBottomBar
    'mobileBottomBar.phone': 'Telefon',
    'mobileBottomBar.whatsapp': 'WhatsApp',

    // WhatsApp Messages
    'whatsapp.offerMessage': 'Hallo,%20ich%20möchte%20ein%20Angebot%20für%20Fliegengitter%20anfordern.',

    // Contact
    'contact.title': 'Ücretsiz Teklif Almaya Hazır Mısınız?',
    'contact.subtitle': 'Bağlayıcı olmayan danışmanlık ve özel teklif için şimdi bizimle iletişime geçin. Uzmanlarımız ihtiyaçlarınız hakkında kişisel olarak danışmanlık yapar, uygun çözümleri önerir ve size detaylı bir teklif hazırlar - tamamen ücretsiz ve bağlayıcı olmayan.',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Ara',

    // Footer
    'footer.rights': 'Tüm hakları saklıdır',
    'footer.contact': 'İletişim',
    'footer.address': 'Adres',
    'footer.description': 'Lüksemburg\'tan premium sineklik çözümleri. Eviniz için ölçüye özel.',
    'footer.links': 'Bağlantılar',
    'footer.manufacturer': 'Üretici',
    'footer.manufacturerDesc': 'Tüm ürünler Fenetre Systems tarafından profesyonel olarak üretilir.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || 'de';
    }
    return 'de';
  });
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return !savedLang; // Eğer kayıtlı dil varsa popup gösterme
    }
    return true;
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setShowPopup(false);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, showPopup, setShowPopup }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

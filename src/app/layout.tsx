import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Fliegengitter Luxemburg: Maßgefertigter Insektenschutz",
  description: "Fliegengitter Fenster maßgefertigt für Ihr Zuhause. Premium Qualität, professionelle Montage in Luxemburg. Jetzt kostenloses Angebot anfordern!",
  keywords: "Fliegengitter Luxemburg, Luxemburg sineklik, Luxemburg plise sineklik, Luxemburg plise perde, Insektenschutz Luxemburg, Plissee Fliegengitter, Fenster Insektenschutz",
  alternates: {
    canonical: "https://fliegengitter.lu",
  },
  openGraph: {
    title: "Fliegengitter Luxemburg: Maßgefertigter Insektenschutz",
    description: "Fliegengitter Fenster maßgefertigt für Ihr Zuhause. Premium Qualität, professionelle Montage in Luxemburg. Jetzt kostenloses Angebot anfordern!",
    url: "https://fliegengitter.lu",
    siteName: "Fliegengitter.lu",
    locale: "de_LU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fliegengitter Luxemburg: Maßgefertigter Insektenschutz",
    description: "Fliegengitter Fenster maßgefertigt für Ihr Zuhause. Premium Qualität, professionelle Montage in Luxemburg. Jetzt kostenloses Angebot anfordern!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fliegengitter.lu',
  description: 'Professionelle Fliegengitter Fenster und Insektenschutzlösungen für Luxemburg und Europa. Maßgefertigte Produkte mit professioneller Montage.',
  url: 'https://fliegengitter.lu',
  telephone: '+90 540 336 3873',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Luxemburg',
    addressCountry: 'LU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.8153,
    longitude: 6.1296,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.8153,
      longitude: 6.1296,
    },
    geoRadius: '100000',
  },
  priceRange: '€€',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.fenetresystems.com',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

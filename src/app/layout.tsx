import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Fliegengitter Luxemburg: Maßgefertigter Insektenschutz",
  description: "Fliegengitter Fenster maßgefertigt für Ihr Zuhause. Premium Qualität, professionelle Montage in Luxemburg. Jetzt kostenloses Angebot anfordern!",
  keywords: "Fliegengitter Fenster, Insektenschutz Luxemburg, Plissee Fliegengitter, Fenster Insektenschutz",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className="min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

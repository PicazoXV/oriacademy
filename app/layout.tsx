import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | ORI Academy",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: "info@oriacademy.es",
    telephone: "+34 624 54 74 06",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Cruz, 21",
      postalCode: "02001",
      addressLocality: "Albacete",
      addressCountry: "ES",
    },
    sameAs: ["https://wa.me/34624547406"],
  };

  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-white text-slate-900 flex flex-col">
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main id="contenido-principal" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

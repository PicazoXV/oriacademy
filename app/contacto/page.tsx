import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto",
  description:
    "Contacta con ORI Academy para resolver dudas, consultar horarios y encontrar el curso de programación ideal para tu hijo o hija.",
  path: "/contacto",
});

export default function ContactoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contacto",
        item: `${siteConfig.url}/contacto`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactoPageClient />
    </>
  );
}

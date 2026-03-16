import type { Metadata } from "next";
import TalleresPageClient from "./TalleresPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Talleres Intensivos de Programación",
  description:
    "Talleres intensivos de programación y creación de videojuegos por edades. Grupos reducidos y metodología práctica en ORI Academy.",
  path: "/talleres",
});

export default function TalleresPage() {
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
        name: "Talleres",
        item: `${siteConfig.url}/talleres`,
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
      <TalleresPageClient />
    </>
  );
}

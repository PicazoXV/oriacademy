import { Suspense } from "react";
import type { Metadata } from "next";
import SolicitarPlazaPageClient from "./SolicitarPlazaPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Solicitar Plaza",
  description:
    "Solicita plaza en ORI Academy. Te ayudamos a elegir el curso adecuado según edad, nivel y objetivos del alumno.",
  path: "/solicitar-plaza",
});

export default function SolicitarPlazaPage() {
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
        name: "Solicitar plaza",
        item: `${siteConfig.url}/solicitar-plaza`,
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
      <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
        <SolicitarPlazaPageClient />
      </Suspense>
    </>
  );
}

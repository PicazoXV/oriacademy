import type { Metadata } from "next";
import CursosPageClient from "./CursosPageClient";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cursos de Programación y Videojuegos",
  description:
    "Descubre los cursos de ORI Academy para edades de 7 a 16 años: Scratch, Minecraft, Roblox, Unity, desarrollo web e inteligencia artificial.",
  path: "/cursos",
});

export default function CursosPage() {
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
        name: "Cursos",
        item: `${siteConfig.url}/cursos`,
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
      <CursosPageClient />
    </>
  );
}

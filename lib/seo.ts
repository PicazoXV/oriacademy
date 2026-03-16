import type { Metadata } from "next";

export const siteConfig = {
  name: "ORI Academy",
  shortName: "ORI Academy",
  description:
    "Academia de programación y desarrollo de videojuegos para niños y adolescentes de 7 a 16 años.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.oriacademy.es").replace(
    /\/$/,
    "",
  ),
  locale: "es_ES",
  twitterHandle: "@oriacademy",
  defaultImage: "/hero.jpg",
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = siteConfig.defaultImage,
}: MetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonicalUrl,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [imageUrl],
    },
  };
}

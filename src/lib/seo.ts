import { SEO_KEY_WORDS } from "@/constants/seo";

// lib/seo.ts
export const generateMetadata = ({
  title,
  description,
  url,
  image,
  keywords = SEO_KEY_WORDS,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords?: string;
}) => ({
  title,
  description,
  keywords,
  image,
  robots: "index, follow",
  authors: [{ name: "Bir digital" }],
  publisher: "Bir",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title,
    description,
    url,
    type: "website",
    locale: "ru_KG",
    siteName: "Bir digital",
    images: [
      {
        url: image,
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
    images: [image],
  },
  alternates: {
    canonical: url,
  },
  // дополнительные мета-теги
  other: {
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
});

// Дополнительная функция для структурированных данных

export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bir digital",
  url: "https://bir-ten.vercel.app/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bir-ten.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

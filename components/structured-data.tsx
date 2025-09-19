import Script from "next/script"

interface StructuredDataProps {
  type: "website" | "article" | "guide"
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
}

export function StructuredData({
  type,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: StructuredDataProps) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : type === "article" ? "Article" : "HowTo",
    name: title,
    description: description,
    url: url,
    inLanguage: "id-ID",
    publisher: {
      "@type": "Organization",
      name: "Panduan Ibadah Islam",
      url: "https://panduan-ibadah-islam.vercel.app",
    },
  }

  let structuredData = baseStructuredData

  if (type === "website") {
    structuredData = {
      ...baseStructuredData,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://panduan-ibadah-islam.vercel.app/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    }
  }

  if (type === "article" || type === "guide") {
    structuredData = {
      ...baseStructuredData,
      headline: title,
      datePublished: datePublished || new Date().toISOString(),
      dateModified: dateModified || new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "Panduan Ibadah Islam",
      },
      image: image || "https://panduan-ibadah-islam.vercel.app/og-image.png",
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

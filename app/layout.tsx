import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Panduan Ibadah Islam Lengkap | Thaharah, Shalat, Zakat, Haji",
  description:
    "Panduan lengkap ibadah Islam meliputi thaharah, shalat wajib dan sunnah, khutbah, pengurusan jenazah, penyembelihan hewan, zakat, dan haji. Sumber terpercaya untuk umat Muslim.",
  keywords: "panduan ibadah islam, thaharah, shalat, zakat, haji, khutbah, jenazah, penyembelihan, islam indonesia",
  authors: [{ name: "Panduan Ibadah Islam" }],
  creator: "Panduan Ibadah Islam",
  publisher: "Panduan Ibadah Islam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://panduan-ibadah-islam.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panduan Ibadah Islam Lengkap",
    description: "Panduan lengkap ibadah Islam untuk umat Muslim Indonesia",
    url: "https://panduan-ibadah-islam.vercel.app",
    siteName: "Panduan Ibadah Islam",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Ibadah Islam Lengkap",
    description: "Panduan lengkap ibadah Islam untuk umat Muslim Indonesia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

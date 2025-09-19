import type { Metadata } from "next"
import ZakatClientPage from "./ZakatClientPage"
import { StructuredData } from "@/components/structured-data"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Panduan Zakat Lengkap | Zakat Fitrah, Zakat Mal, dan Zakat Profesi",
  description:
    "Panduan lengkap zakat dalam Islam meliputi zakat fitrah, zakat mal, zakat profesi, dan zakat perdagangan. Pelajari perhitungan, nisab, dan tata cara pembayaran zakat.",
  keywords: "zakat, zakat fitrah, zakat mal, zakat profesi, nisab, perhitungan zakat, islam",
}

export default function ZakatPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Zakat Lengkap"
        description="Pelajari berbagai jenis zakat, perhitungan, dan tata cara pembayaran zakat dalam Islam"
        url="https://panduan-ibadah-islam.vercel.app/zakat"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ZakatClientPage />
      </ThemeProvider>
    </>
  )
}

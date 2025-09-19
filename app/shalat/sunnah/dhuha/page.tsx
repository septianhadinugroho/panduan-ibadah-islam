import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sun, ArrowLeft, Clock, Gift } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Dhuha | Waktu, Tata Cara, dan Keutamaan",
  description:
    "Pelajari shalat dhuha lengkap dengan waktu pelaksanaan, tata cara, doa dhuha, dan keutamaannya untuk rezeki.",
  keywords: "shalat dhuha, waktu dhuha, doa dhuha, tata cara dhuha, keutamaan dhuha, rezeki",
}

export default function ShalatDhuhaPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-4">
                <Link href="/shalat/sunnah">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Shalat Sunnah
                </Link>
              </Button>

              <Badge variant="secondary" className="mb-4">
                <Sun className="w-4 h-4 mr-2" />
                Shalat Dhuha
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Dhuha</h1>
              <p className="text-xl text-muted-foreground">
                Shalat sunnah yang dikerjakan di pagi hari untuk memohon berkah dan rezeki dari Allah SWT
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Dhuha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Shalat dhuha adalah shalat sunnah yang dikerjakan ketika matahari sudah naik dan terang, yaitu sekitar
                  pukul 07:00 hingga menjelang waktu dzuhur. Disebut juga shalat isyraq atau awwabin.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm font-medium text-yellow-800">
                    "Barangsiapa yang shalat dhuha 2 rakaat, tidak akan ditulis sebagai orang yang lalai. Barangsiapa
                    yang shalat 4 rakaat, akan ditulis sebagai orang yang beribadah. Barangsiapa yang shalat 6 rakaat,
                    akan dicukupkan (kebutuhannya) pada hari itu. Barangsiapa yang shalat 8 rakaat, akan ditulis sebagai
                    orang yang taat."
                    <span className="text-yellow-600">(HR. Thabrani)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Time */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Waktu Pelaksanaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Waktu yang Dianjurkan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Mulai:</strong> Setelah matahari naik setinggi tombak (±15 menit setelah terbit)
                      </li>
                      <li>
                        • <strong>Paling utama:</strong> Ketika matahari sudah tinggi dan panas
                      </li>
                      <li>
                        • <strong>Berakhir:</strong> Sebelum waktu dzuhur (±15 menit sebelum dzuhur)
                      </li>
                      <li>
                        • <strong>Waktu praktis:</strong> Pukul 07:00 - 11:00
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Waktu yang Dilarang:</h3>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-red-700">
                        <li>• Saat matahari terbit (±15 menit pertama)</li>
                        <li>• Saat matahari tepat di atas kepala</li>
                        <li>• Saat matahari akan terbenam</li>
                        <li>• Setelah shalat ashar hingga maghrib</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Dhuha</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Jumlah Rakaat:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-2xl font-bold text-green-600">2</p>
                        <p className="text-sm text-muted-foreground">Minimal</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-2xl font-bold text-blue-600">4</p>
                        <p className="text-sm text-muted-foreground">Dianjurkan</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-2xl font-bold text-purple-600">8</p>
                        <p className="text-sm text-muted-foreground">Utama</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-2xl font-bold text-orange-600">12</p>
                        <p className="text-sm text-muted-foreground">Maksimal</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Dhuha:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Arab:</p>
                      <p className="text-lg mb-3 font-arabic">أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى</p>
                      <p className="text-sm mb-2 font-medium">Latin:</p>
                      <p className="text-sm mb-3">"Ushalli sunnatud dhuha rak'ataini lillahi ta'ala"</p>
                      <p className="text-sm font-medium">Artinya:</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku niat shalat sunnah dhuha dua rakaat karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Bacaan yang Dianjurkan:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Rakaat Pertama:</h4>
                        <p className="text-sm text-muted-foreground">Al-Fatihah + As-Syams (QS. 91)</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Rakaat Kedua:</h4>
                        <p className="text-sm text-muted-foreground">Al-Fatihah + Ad-Dhuha (QS. 93)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dua after Dhuha */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Doa Setelah Shalat Dhuha
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-lg mb-3 font-arabic text-right">
                      اللَّهُمَّ إِنَّ الضُّحَى ضُحَاؤُكَ وَالْبَهَاءَ بَهَاؤُكَ وَالْجَمَالَ جَمَالُكَ وَالْقُوَّةَ قُوَّتُكَ وَالْقُدْرَةَ قُدْرَتُكَ وَالْعِصْمَةَ عِصْمَتُكَ
                    </p>
                    <p className="text-sm mb-2 font-medium">Latin:</p>
                    <p className="text-sm mb-3">
                      "Allahumma innad dhuha dhuha'uka wal bahaa bahaa'uka wal jamala jamaluka wal quwwata quwwatuka wal
                      qudrota qudrotuka wal 'ishmata 'ishmatuka"
                    </p>
                    <p className="text-sm font-medium">Artinya:</p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, sesungguhnya waktu dhuha adalah waktu dhuha-Mu, keindahan adalah keindahan-Mu,
                      keagungan adalah keagungan-Mu, kekuatan adalah kekuatan-Mu, kekuasaan adalah kekuasaan-Mu, dan
                      perlindungan adalah perlindungan-Mu."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keutamaan dan Manfaat Shalat Dhuha</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Keutamaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Dibangunkan rumah di surga (emas)</li>
                      <li>• Dicukupkan kebutuhan sehari-hari</li>
                      <li>• Mendapat pahala sedekah untuk setiap persendian</li>
                      <li>• Dimudahkan rezeki dan pekerjaan</li>
                      <li>• Mendapat keberkahan dalam hidup</li>
                      <li>• Ditulis sebagai orang yang beribadah</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Manfaat Praktis:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Memulai hari dengan energi positif</li>
                      <li>• Meningkatkan fokus dan produktivitas</li>
                      <li>• Menenangkan pikiran dan hati</li>
                      <li>• Melatih kedisiplinan waktu</li>
                      <li>• Mendekatkan diri kepada Allah</li>
                      <li>• Mendapat barakah dalam pekerjaan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

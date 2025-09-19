import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, ArrowLeft, Clock, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Tahajud | Waktu, Tata Cara, dan Doa",
  description:
    "Pelajari shalat tahajud lengkap dengan waktu pelaksanaan, tata cara, doa tahajud, dan keutamaannya dalam Islam.",
  keywords: "shalat tahajud, waktu tahajud, doa tahajud, tata cara tahajud, keutamaan tahajud",
}

export default function ShalatTahajudPage() {
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
                <Moon className="w-4 h-4 mr-2" />
                Shalat Tahajud
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Tahajud</h1>
              <p className="text-xl text-muted-foreground">
                Shalat sunnah mulia yang dikerjakan di sepertiga malam terakhir untuk mendekatkan diri kepada Allah
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Tahajud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tahajud berasal dari kata "hajada" yang berarti meninggalkan tidur. Shalat tahajud adalah shalat
                  sunnah yang dikerjakan setelah tidur di malam hari, kemudian bangun untuk beribadah kepada Allah SWT.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm font-medium text-purple-800">
                    "Dan pada sebagian malam hari bersembahyang tahajudlah kamu sebagai suatu ibadah tambahan bagimu;
                    mudah-mudahan Tuhanmu mengangkat kamu ke tempat yang terpuji."
                    <span className="text-purple-600">(QS. Al-Isra: 79)</span>
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
                        • <strong>Sepertiga malam terakhir</strong> (paling utama)
                      </li>
                      <li>• Setelah shalat isya hingga sebelum subuh</li>
                      <li>• Setelah tidur dan bangun di malam hari</li>
                      <li>• Waktu sahur (sebelum imsak)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Cara Menghitung:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2">Contoh: Maghrib 18:00, Subuh 05:00</p>
                      <p className="text-sm mb-2">Malam = 11 jam (18:00-05:00)</p>
                      <p className="text-sm mb-2">Sepertiga terakhir = 3 jam 40 menit</p>
                      <p className="text-sm font-medium text-primary">Waktu tahajud: 01:20 - 05:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Tahajud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Persiapan:</h3>
                    <ul className="space-y-2 text-sm ml-4">
                      <li>• Tidur terlebih dahulu setelah isya</li>
                      <li>• Bangun di sepertiga malam terakhir</li>
                      <li>• Berwudhu dengan sempurna</li>
                      <li>• Cari tempat yang tenang dan bersih</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Jumlah Rakaat:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium text-green-700">Minimal</h4>
                        <p className="text-2xl font-bold text-green-600">2</p>
                        <p className="text-sm text-muted-foreground">Rakaat</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium text-blue-700">Dianjurkan</h4>
                        <p className="text-2xl font-bold text-blue-600">8</p>
                        <p className="text-sm text-muted-foreground">Rakaat</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium text-purple-700">Maksimal</h4>
                        <p className="text-2xl font-bold text-purple-600">12</p>
                        <p className="text-sm text-muted-foreground">Rakaat</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Tahajud:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Arab:</p>
                      <p className="text-lg mb-3 font-arabic">أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى</p>
                      <p className="text-sm mb-2 font-medium">Latin:</p>
                      <p className="text-sm mb-3">"Ushalli sunnatal tahajjudi rak'ataini lillahi ta'ala"</p>
                      <p className="text-sm font-medium">Artinya:</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku niat shalat sunnah tahajud dua rakaat karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dua after Tahajud */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Doa Setelah Shalat Tahajud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg mb-3 font-arabic text-right">
                      اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ
                    </p>
                    <p className="text-sm mb-2 font-medium">Latin:</p>
                    <p className="text-sm mb-3">
                      "Allahumma lakal hamdu anta qayyimus samawati wal ardhi wa man fihinna, wa lakal hamdu anta
                      malikus samawati wal ardhi wa man fihinna"
                    </p>
                    <p className="text-sm font-medium">Artinya:</p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, bagi-Mu segala puji, Engkau yang mengurus langit dan bumi serta apa yang ada di
                      dalamnya. Bagi-Mu segala puji, Engkau raja langit dan bumi serta apa yang ada di dalamnya."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keutamaan dan Manfaat Shalat Tahajud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Keutamaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Diangkat ke maqam mahmud (tempat terpuji)</li>
                      <li>• Doa lebih mudah dikabulkan</li>
                      <li>• Menghapus dosa-dosa</li>
                      <li>• Menjadi ciri orang-orang bertakwa</li>
                      <li>• Mendapat rahmat dan ampunan Allah</li>
                      <li>• Menyehatkan badan dan jiwa</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Tips Konsisten:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Tidur lebih awal setelah isya</li>
                      <li>• Pasang alarm untuk bangun</li>
                      <li>• Mulai dengan 2 rakaat</li>
                      <li>• Baca Al-Quran setelah shalat</li>
                      <li>• Perbanyak istighfar dan doa</li>
                      <li>• Konsisten meski hanya sebentar</li>
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

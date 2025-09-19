import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, ArrowLeft, Users, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Tarawih | Tata Cara dan Keutamaan Ramadhan",
  description: "Pelajari shalat tarawih lengkap dengan tata cara, jumlah rakaat, dan keutamaannya di bulan Ramadhan.",
  keywords: "shalat tarawih, ramadhan, tata cara tarawih, keutamaan tarawih, shalat malam ramadhan",
}

export default function ShalatTarawihPage() {
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
                Shalat Tarawih
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Tarawih</h1>
              <p className="text-xl text-muted-foreground">
                Shalat sunnah khusus bulan Ramadhan yang dikerjakan setelah shalat isya secara berjamaah
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Tarawih</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tarawih berasal dari kata "tarwiha" yang berarti istirahat. Shalat tarawih adalah shalat sunnah yang
                  dikerjakan pada malam hari di bulan Ramadhan setelah shalat isya, biasanya dilakukan secara berjamaah.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-sm font-medium text-indigo-800">
                    "Barangsiapa yang shalat pada malam Ramadhan dengan penuh keimanan dan mengharap pahala, maka akan
                    diampuni dosa-dosanya yang telah lalu."
                    <span className="text-indigo-600">(HR. Bukhari dan Muslim)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Time and Duration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Waktu dan Durasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Waktu Pelaksanaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Mulai:</strong> Setelah shalat isya
                      </li>
                      <li>
                        • <strong>Berakhir:</strong> Sebelum waktu witir atau subuh
                      </li>
                      <li>
                        • <strong>Durasi:</strong> Selama bulan Ramadhan (29-30 hari)
                      </li>
                      <li>
                        • <strong>Waktu terbaik:</strong> Sepertiga malam pertama
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Karakteristik:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Users className="w-5 h-5 mr-3 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-800">Berjamaah</p>
                          <p className="text-sm text-blue-600">Lebih utama dilakukan bersama</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <Moon className="w-5 h-5 mr-3 text-green-600" />
                        <div>
                          <p className="font-medium text-green-800">Khusus Ramadhan</p>
                          <p className="text-sm text-green-600">Hanya di bulan suci</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Number of Rakaats */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Jumlah Rakaat Tarawih</CardTitle>
                <CardDescription>Berbagai pendapat ulama tentang jumlah rakaat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600">8</p>
                    <p className="text-sm font-medium">Rakaat</p>
                    <p className="text-xs text-muted-foreground mt-1">Pendapat Hanafi</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center bg-blue-50">
                    <p className="text-3xl font-bold text-blue-600">20</p>
                    <p className="text-sm font-medium">Rakaat</p>
                    <p className="text-xs text-muted-foreground mt-1">Pendapat Jumhur</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <p className="text-3xl font-bold text-purple-600">36</p>
                    <p className="text-sm font-medium">Rakaat</p>
                    <p className="text-xs text-muted-foreground mt-1">Pendapat Maliki</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800 mb-2">Catatan:</p>
                  <p className="text-sm text-yellow-700">
                    Yang paling umum dipraktikkan di Indonesia adalah 20 rakaat (10 salam) ditambah 3 rakaat witir.
                    Semua pendapat ini sah dan bisa dipilih sesuai dengan kondisi dan kemampuan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Tarawih</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Struktur Shalat Tarawih (20 Rakaat):</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="p-3 border rounded-lg">
                          <p className="font-medium">Salam 1-5</p>
                          <p className="text-sm text-muted-foreground">10 rakaat pertama</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <p className="font-medium">Istirahat</p>
                          <p className="text-sm text-muted-foreground">Dzikir dan doa</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 border rounded-lg">
                          <p className="font-medium">Salam 6-10</p>
                          <p className="text-sm text-muted-foreground">10 rakaat kedua</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <p className="font-medium">Witir</p>
                          <p className="text-sm text-muted-foreground">3 rakaat penutup</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Tarawih:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Arab:</p>
                      <p className="text-lg mb-3 font-arabic">أُصَلِّي سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى</p>
                      <p className="text-sm mb-2 font-medium">Latin:</p>
                      <p className="text-sm mb-3">"Ushalli sunnata tarawiihi rak'ataini ma'muuman lillahi ta'ala"</p>
                      <p className="text-sm font-medium">Artinya:</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku niat shalat sunnah tarawih dua rakaat sebagai makmum karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Bacaan yang Dianjurkan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Imam membaca Al-Quran dengan tartil (perlahan dan jelas)</li>
                      <li>• Biasanya menghatamkan Al-Quran selama bulan Ramadhan</li>
                      <li>• Setiap malam sekitar 1 juz (20 halaman)</li>
                      <li>• Makmum mendengarkan dengan khusyuk</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dua during breaks */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Doa Saat Istirahat Tarawih</CardTitle>
                <CardDescription>Dzikir dan doa yang dibaca saat jeda antar salam</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm mb-2 font-medium">Tasbih (3x):</p>
                    <p className="text-lg mb-3 font-arabic">سُبْحَانَ الْمَلِكِ الْقُدُّوسِ</p>
                    <p className="text-sm mb-3">"Subhanal malikil quddus"</p>
                    <p className="text-sm text-muted-foreground">"Maha Suci Raja Yang Maha Suci"</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm mb-2 font-medium">Doa Istirahat:</p>
                    <p className="text-lg mb-3 font-arabic text-right leading-loose">
                      اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                    </p>
                    <p className="text-sm mb-3">"Allahumma a'inni 'ala dzikrika wa syukrika wa husni 'ibadatika"</p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, tolonglah aku untuk berdzikir kepada-Mu, bersyukur kepada-Mu, dan beribadah dengan baik
                      kepada-Mu"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keutamaan dan Manfaat Shalat Tarawih</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Keutamaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Diampuni dosa-dosa yang telah lalu</li>
                      <li>• Mendapat pahala shalat malam</li>
                      <li>• Menambah keimanan dan ketakwaan</li>
                      <li>• Memperoleh keberkahan bulan Ramadhan</li>
                      <li>• Mendengarkan tilawah Al-Quran</li>
                      <li>• Memperkuat ukhuwah islamiyah</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Manfaat Sosial:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mempererat silaturahmi dengan jamaah</li>
                      <li>• Melatih kedisiplinan waktu</li>
                      <li>• Menciptakan suasana religius</li>
                      <li>• Menghidupkan masjid di malam hari</li>
                      <li>• Memberikan ketenangan jiwa</li>
                      <li>• Meningkatkan kualitas ibadah</li>
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

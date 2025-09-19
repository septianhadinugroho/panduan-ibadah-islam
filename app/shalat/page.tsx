import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Sun, Sunset, Moon, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Shalat Lengkap | Shalat Wajib dan Sunnah dalam Islam",
  description:
    "Panduan lengkap shalat dalam Islam meliputi shalat wajib lima waktu dan shalat sunnah. Pelajari tata cara, syarat, rukun, dan doa-doa shalat.",
  keywords: "shalat, shalat wajib, shalat sunnah, tata cara shalat, rukun shalat, islam",
}

const prayerTimes = [
  {
    name: "Subuh",
    time: "04:30 - 06:00",
    rakaat: "2 Rakaat",
    icon: Sun,
    description: "Shalat subuh dimulai dari terbit fajar hingga terbit matahari",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Dzuhur",
    time: "12:00 - 15:30",
    rakaat: "4 Rakaat",
    icon: Sun,
    description: "Shalat dzuhur dimulai dari matahari condong ke barat hingga bayangan sama panjang",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    name: "Ashar",
    time: "15:30 - 18:00",
    rakaat: "4 Rakaat",
    icon: Sun,
    description: "Shalat ashar dimulai dari bayangan lebih panjang hingga matahari terbenam",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Maghrib",
    time: "18:00 - 19:30",
    rakaat: "3 Rakaat",
    icon: Sunset,
    description: "Shalat maghrib dimulai dari matahari terbenam hingga hilang mega merah",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    name: "Isya",
    time: "19:30 - 04:30",
    rakaat: "4 Rakaat",
    icon: Moon,
    description: "Shalat isya dimulai dari hilang mega merah hingga terbit fajar",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
]

const sunnahPrayers = [
  {
    name: "Shalat Rawatib",
    description: "Shalat sunnah yang dikerjakan sebelum atau sesudah shalat wajib",
    href: "/shalat/sunnah/rawatib",
  },
  {
    name: "Shalat Tahajud",
    description: "Shalat sunnah yang dikerjakan di sepertiga malam terakhir",
    href: "/shalat/sunnah/tahajud",
  },
  {
    name: "Shalat Dhuha",
    description: "Shalat sunnah yang dikerjakan pada pagi hari setelah matahari naik",
    href: "/shalat/sunnah/dhuha",
  },
  {
    name: "Shalat Istikharah",
    description: "Shalat untuk meminta petunjuk Allah dalam mengambil keputusan",
    href: "/shalat/sunnah/istikharah",
  },
  {
    name: "Shalat Tarawih",
    description: "Shalat sunnah yang dikerjakan pada malam bulan Ramadhan",
    href: "/shalat/sunnah/tarawih",
  },
  {
    name: "Shalat Witir",
    description: "Shalat sunnah muakkad yang dikerjakan setelah shalat isya",
    href: "/shalat/sunnah/witir",
  },
]

export default function ShalatPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Shalat Lengkap"
        description="Pelajari tata cara shalat wajib lima waktu dan berbagai shalat sunnah dalam Islam"
        url="https://panduan-ibadah-islam.vercel.app/shalat"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Panduan Shalat
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Panduan Shalat Lengkap</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Pelajari tata cara shalat wajib lima waktu dan berbagai shalat sunnah dalam Islam
                </p>
              </div>

              {/* Quick Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Shalat Wajib
                    </CardTitle>
                    <CardDescription>Lima waktu shalat yang wajib dikerjakan setiap hari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="/shalat/wajib">
                        Pelajari Shalat Wajib
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-primary" />
                      Shalat Sunnah
                    </CardTitle>
                    <CardDescription>Berbagai shalat sunnah yang dianjurkan dalam Islam</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/shalat/sunnah">
                        Pelajari Shalat Sunnah
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Prayer Times */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>Waktu Shalat Wajib</CardTitle>
                  <CardDescription>Lima waktu shalat yang wajib dikerjakan setiap hari</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prayerTimes.map((prayer, index) => (
                      <div key={index} className="prayer-time rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <prayer.icon className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold">{prayer.name}</h3>
                          </div>
                          <Badge variant="secondary" className={prayer.color}>
                            {prayer.rakaat}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Waktu:</strong> {prayer.time}
                        </p>
                        <p className="text-sm text-muted-foreground">{prayer.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sunnah Prayers */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>Shalat Sunnah</CardTitle>
                  <CardDescription>Berbagai shalat sunnah yang dianjurkan dalam Islam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sunnahPrayers.map((prayer, index) => (
                      <Card key={index} className="group hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {prayer.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="mb-4">{prayer.description}</CardDescription>
                          <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                            <Link href={prayer.href}>
                              Pelajari
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Hal Penting dalam Shalat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Syarat Wajib Shalat:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Beragama Islam</li>
                        <li>• Sudah baligh</li>
                        <li>• Berakal sehat</li>
                        <li>• Suci dari hadas dan najis</li>
                        <li>• Masuk waktu shalat</li>
                        <li>• Menghadap kiblat</li>
                        <li>• Menutup aurat</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Rukun Shalat:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Niat</li>
                        <li>• Takbiratul ihram</li>
                        <li>• Berdiri (bagi yang mampu)</li>
                        <li>• Membaca Al-Fatihah</li>
                        <li>• Rukuk dan tuma'ninah</li>
                        <li>• I'tidal dan tuma'ninah</li>
                        <li>• Sujud dua kali dan tuma'ninah</li>
                        <li>• Duduk antara dua sujud</li>
                        <li>• Duduk akhir</li>
                        <li>• Membaca tasyahud akhir</li>
                        <li>• Membaca shalawat</li>
                        <li>• Salam</li>
                        <li>• Tertib</li>
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
    </>
  )
}

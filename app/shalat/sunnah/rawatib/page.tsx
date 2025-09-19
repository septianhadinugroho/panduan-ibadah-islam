import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, ArrowLeft, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Rawatib | Tata Cara dan Waktu Pelaksanaan",
  description:
    "Pelajari shalat rawatib lengkap dengan tata cara, waktu pelaksanaan, dan doa-doanya. 12 rakaat sunnah rawatib sehari.",
  keywords: "shalat rawatib, sunnah rawatib, tata cara rawatib, waktu rawatib, doa rawatib",
}

const rawatibSchedule = [
  {
    prayer: "Subuh",
    before: "2 rakaat",
    after: "-",
    time: "Sebelum shalat subuh",
    virtue: "Lebih utama dari dunia dan seisinya",
  },
  {
    prayer: "Dzuhur",
    before: "4 rakaat",
    after: "2 rakaat",
    time: "Sebelum dan sesudah shalat dzuhur",
    virtue: "Dibangunkan rumah di surga",
  },
  {
    prayer: "Ashar",
    before: "-",
    after: "-",
    time: "-",
    virtue: "-",
  },
  {
    prayer: "Maghrib",
    before: "-",
    after: "2 rakaat",
    time: "Sesudah shalat maghrib",
    virtue: "Ditulis sebagai orang yang banyak bersyukur",
  },
  {
    prayer: "Isya",
    before: "-",
    after: "2 rakaat",
    time: "Sesudah shalat isya",
    virtue: "Mendapat pahala shalat malam",
  },
]

export default function ShalatRawatibPage() {
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
                <Clock className="w-4 h-4 mr-2" />
                Shalat Rawatib
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Rawatib</h1>
              <p className="text-xl text-muted-foreground">
                Shalat sunnah yang dikerjakan sebelum atau sesudah shalat wajib, total 12 rakaat sehari
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Rawatib</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Shalat rawatib adalah shalat sunnah yang dikerjakan bersama dengan shalat wajib, baik sebelum maupun
                  sesudahnya. Disebut rawatib karena sifatnya yang tetap (ratib) mengikuti shalat wajib.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-blue-800">
                    "Barangsiapa yang mengerjakan 12 rakaat sunnah dalam sehari semalam, maka Allah akan membangunkan
                    untuknya rumah di surga."
                    <span className="text-blue-600">(HR. Muslim)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Table */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Jadwal Shalat Rawatib</CardTitle>
                <CardDescription>12 rakaat sunnah rawatib yang dianjurkan setiap hari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Shalat</th>
                        <th className="text-left p-3 font-semibold">Sebelum</th>
                        <th className="text-left p-3 font-semibold">Sesudah</th>
                        <th className="text-left p-3 font-semibold">Keutamaan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rawatibSchedule.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium">{item.prayer}</td>
                          <td className="p-3">
                            {item.before !== "-" ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                {item.before}
                              </Badge>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="p-3">
                            {item.after !== "-" ? (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                {item.after}
                              </Badge>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">{item.virtue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Rawatib</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Langkah-langkah:
                    </h3>
                    <ol className="space-y-2 text-sm ml-7">
                      <li>1. Berwudhu dengan sempurna</li>
                      <li>2. Menghadap kiblat dan berniat shalat rawatib</li>
                      <li>3. Takbiratul ihram</li>
                      <li>4. Membaca Al-Fatihah dan surat pendek</li>
                      <li>5. Rukuk dan sujud seperti shalat biasa</li>
                      <li>6. Tasyahud dan salam</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Rawatib:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Sebelum Subuh:</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        "Ushalli sunnatar rawatibi qablash shubhi rak'ataini lillahi ta'ala"
                      </p>

                      <p className="text-sm mb-2 font-medium">Sebelum Dzuhur:</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        "Ushalli sunnatar rawatibi qablazh zhuhri arba'a raka'atin lillahi ta'ala"
                      </p>

                      <p className="text-sm mb-2 font-medium">Sesudah Dzuhur:</p>
                      <p className="text-sm text-muted-foreground">
                        "Ushalli sunnatar rawatibi ba'dazh zhuhri rak'ataini lillahi ta'ala"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keutamaan dan Manfaat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Keutamaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Dibangunkan rumah di surga</li>
                      <li>• Menyempurnakan kekurangan shalat wajib</li>
                      <li>• Mendapat syafaat di hari kiamat</li>
                      <li>• Menambah kedekatan dengan Allah</li>
                      <li>• Mendapat pahala berlipat ganda</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Tips Konsisten:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mulai dengan yang mudah (2 rakaat sebelum subuh)</li>
                      <li>• Buat jadwal dan reminder</li>
                      <li>• Kerjakan di tempat yang tenang</li>
                      <li>• Niatkan untuk mendekatkan diri kepada Allah</li>
                      <li>• Jangan memaksakan jika sedang sakit</li>
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

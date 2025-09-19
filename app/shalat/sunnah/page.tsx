import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, Sun, Clock, Heart, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Shalat Sunnah Lengkap | Rawatib, Tahajud, Dhuha, dan Lainnya",
  description:
    "Panduan lengkap shalat sunnah dalam Islam meliputi shalat rawatib, tahajud, dhuha, istikharah, tarawih, dan witir dengan tata cara dan doanya.",
  keywords: "shalat sunnah, rawatib, tahajud, dhuha, istikharah, tarawih, witir, islam",
}

const sunnahPrayers = [
  {
    name: "Shalat Rawatib",
    description: "Shalat sunnah yang dikerjakan sebelum atau sesudah shalat wajib",
    time: "Sebelum/sesudah shalat wajib",
    rakaat: "2-4 Rakaat",
    icon: Clock,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    href: "/shalat/sunnah/rawatib",
    details: "12 rakaat sehari: 2 sebelum subuh, 4 sebelum dan 2 sesudah dzuhur, 2 sesudah maghrib, 2 sesudah isya",
  },
  {
    name: "Shalat Tahajud",
    description: "Shalat sunnah yang dikerjakan di sepertiga malam terakhir",
    time: "Sepertiga malam terakhir",
    rakaat: "2-12 Rakaat",
    icon: Moon,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    href: "/shalat/sunnah/tahajud",
    details: "Dikerjakan setelah tidur dan bangun di malam hari, minimal 2 rakaat maksimal 12 rakaat",
  },
  {
    name: "Shalat Dhuha",
    description: "Shalat sunnah yang dikerjakan pada pagi hari setelah matahari naik",
    time: "Pagi hari (07:00-11:00)",
    rakaat: "2-12 Rakaat",
    icon: Sun,
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    href: "/shalat/sunnah/dhuha",
    details: "Dikerjakan setelah matahari naik setinggi tombak hingga sebelum dzuhur, minimal 2 rakaat",
  },
  {
    name: "Shalat Istikharah",
    description: "Shalat untuk meminta petunjuk Allah dalam mengambil keputusan",
    time: "Kapan saja (tidak waktu makruh)",
    rakaat: "2 Rakaat",
    icon: Heart,
    color: "bg-green-50 text-green-700 border-green-200",
    href: "/shalat/sunnah/istikharah",
    details: "Dikerjakan ketika akan mengambil keputusan penting, dilanjutkan dengan doa istikharah",
  },
  {
    name: "Shalat Tarawih",
    description: "Shalat sunnah yang dikerjakan pada malam bulan Ramadhan",
    time: "Malam Ramadhan setelah isya",
    rakaat: "8-20 Rakaat",
    icon: Moon,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    href: "/shalat/sunnah/tarawih",
    details: "Dikerjakan berjamaah di masjid atau sendiri di rumah, biasanya 8 atau 20 rakaat",
  },
  {
    name: "Shalat Witir",
    description: "Shalat sunnah muakkad yang dikerjakan setelah shalat isya",
    time: "Setelah isya hingga subuh",
    rakaat: "1, 3, 5, 7, 9, atau 11 Rakaat",
    icon: Moon,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    href: "/shalat/sunnah/witir",
    details: "Shalat dengan rakaat ganjil, minimal 1 rakaat, dianjurkan 3 rakaat",
  },
]

const additionalSunnah = [
  {
    name: "Shalat Hajat",
    description: "Shalat untuk memohon hajat kepada Allah",
    rakaat: "2 Rakaat",
  },
  {
    name: "Shalat Taubat",
    description: "Shalat untuk memohon ampunan atas dosa",
    rakaat: "2 Rakaat",
  },
  {
    name: "Shalat Syukur",
    description: "Shalat untuk bersyukur atas nikmat Allah",
    rakaat: "2 Rakaat",
  },
  {
    name: "Shalat Gerhana",
    description: "Shalat ketika terjadi gerhana matahari atau bulan",
    rakaat: "2 Rakaat",
  },
  {
    name: "Shalat Istisqa",
    description: "Shalat untuk memohon hujan",
    rakaat: "2 Rakaat",
  },
  {
    name: "Shalat Safar",
    description: "Shalat sebelum bepergian jauh",
    rakaat: "2 Rakaat",
  },
]

export default function ShalatSunnahPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Shalat Sunnah Lengkap"
        description="Pelajari berbagai shalat sunnah dalam Islam dengan tata cara dan waktu pelaksanaannya"
        url="https://panduan-ibadah-islam.vercel.app/shalat/sunnah"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Moon className="w-4 h-4 mr-2" />
                  Shalat Sunnah
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Panduan Shalat Sunnah</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Pelajari berbagai shalat sunnah dalam Islam yang dianjurkan untuk mendekatkan diri kepada Allah SWT
                </p>
              </div>

              {/* Main Sunnah Prayers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {sunnahPrayers.map((prayer, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <prayer.icon className="w-6 h-6 text-primary" />
                        <Badge variant="secondary" className={prayer.color}>
                          {prayer.rakaat}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{prayer.name}</CardTitle>
                      <CardDescription>{prayer.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Waktu:</p>
                          <p className="text-sm">{prayer.time}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{prayer.details}</p>
                        </div>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href={prayer.href}>
                            Pelajari Lengkap
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Sunnah Prayers */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>Shalat Sunnah Lainnya</CardTitle>
                  <CardDescription>
                    Berbagai shalat sunnah lain yang dapat dikerjakan sesuai kebutuhan dan situasi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {additionalSunnah.map((prayer, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-sm">{prayer.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {prayer.rakaat}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{prayer.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits and Virtues */}
              <Card>
                <CardHeader>
                  <CardTitle>Keutamaan Shalat Sunnah</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Manfaat Shalat Sunnah:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Mendekatkan diri kepada Allah SWT</li>
                        <li>• Menyempurnakan kekurangan shalat wajib</li>
                        <li>• Mendapat pahala dan ganjaran dari Allah</li>
                        <li>• Melatih kedisiplinan dalam beribadah</li>
                        <li>• Menenangkan hati dan pikiran</li>
                        <li>• Memperoleh syafaat di hari kiamat</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Adab Shalat Sunnah:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Dikerjakan dengan khusyuk dan tenang</li>
                        <li>• Tidak boleh mengganggu shalat wajib</li>
                        <li>• Boleh dikerjakan di rumah atau masjid</li>
                        <li>• Tidak wajib dijamak atau diqashar</li>
                        <li>• Boleh ditinggalkan tanpa dosa</li>
                        <li>• Lebih utama dikerjakan secara konsisten</li>
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

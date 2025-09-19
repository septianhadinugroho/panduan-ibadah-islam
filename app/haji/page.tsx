import { CardDescription } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, CheckCircle, Calendar, Users, Banknote } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Haji dan Umrah Lengkap | Rukun, Wajib, dan Tata Cara Ibadah Haji",
  description:
    "Panduan lengkap ibadah haji dan umrah dalam Islam meliputi rukun, wajib, sunnah, dan tata cara pelaksanaan dari persiapan hingga selesai.",
  keywords: "haji, umrah, rukun haji, wajib haji, tata cara haji, manasik haji, islam",
}

const hajiSteps = [
  {
    day: "Tanggal 8 Dzulhijjah",
    name: "Yaumut Tarwiyah",
    location: "Mina",
    activities: [
      "Ihram dari Makkah menuju Mina",
      "Shalat Dzuhur, Ashar, Maghrib, Isya, dan Subuh di Mina",
      "Bermalam di Mina (wajib)",
      "Memperbanyak dzikir dan doa",
    ],
  },
  {
    day: "Tanggal 9 Dzulhijjah",
    name: "Yaumul Wuquf",
    location: "Arafah",
    activities: [
      "Berangkat ke Arafah setelah matahari terbit",
      "Wuquf di Arafah (rukun haji yang paling penting)",
      "Shalat Dzuhur dan Ashar dijamak dan diqashar",
      "Memperbanyak doa dan dzikir",
      "Berangkat ke Muzdalifah setelah matahari terbenam",
    ],
  },
  {
    day: "Tanggal 10 Dzulhijjah",
    name: "Yaumun Nahr",
    location: "Muzdalifah - Mina",
    activities: [
      "Shalat Subuh di Muzdalifah",
      "Mengambil kerikil untuk melempar jumrah",
      "Berangkat ke Mina sebelum matahari terbit",
      "Melempar Jumrah Aqabah (7 kerikil)",
      "Menyembelih hewan kurban",
      "Mencukur atau memotong rambut (tahallul)",
      "Tawaf Ifadhah di Masjidil Haram",
    ],
  },
  {
    day: "Tanggal 11-13 Dzulhijjah",
    name: "Ayyamut Tasyriq",
    location: "Mina",
    activities: [
      "Bermalam di Mina",
      "Melempar tiga jumrah setiap hari (21 kerikil per hari)",
      "Dimulai setelah matahari condong (ba'da zawal)",
      "Boleh pulang tanggal 12 setelah melempar jumrah",
      "Jika bermalam tanggal 12, wajib melempar jumrah tanggal 13",
    ],
  },
]

const hajiPillars = [
  {
    name: "Ihram",
    description: "Niat haji dan mengenakan pakaian ihram dari miqat",
    details:
      "Ihram adalah niat melakukan haji yang disertai dengan mengenakan pakaian khusus (kain putih untuk laki-laki) dan mengucapkan talbiyah.",
  },
  {
    name: "Wuquf di Arafah",
    description: "Berada di Arafah pada tanggal 9 Dzulhijjah",
    details:
      "Wuquf adalah berdiam diri di padang Arafah mulai dari tergelincir matahari tanggal 9 Dzulhijjah hingga terbit fajar tanggal 10 Dzulhijjah.",
  },
  {
    name: "Tawaf Ifadhah",
    description: "Tawaf yang dilakukan setelah wuquf di Arafah",
    details:
      "Tawaf Ifadhah dilakukan setelah melempar jumrah dan tahallul pada tanggal 10 Dzulhijjah atau hari-hari tasyriq.",
  },
  {
    name: "Sa'i",
    description: "Berlari-lari kecil antara bukit Shafa dan Marwah",
    details:
      "Sa'i dilakukan sebanyak 7 kali putaran dimulai dari Shafa dan berakhir di Marwah, dapat dilakukan setelah tawaf qudum atau tawaf ifadhah.",
  },
]

const hajiObligations = [
  "Ihram dari miqat",
  "Bermalam di Muzdalifah",
  "Bermalam di Mina pada malam tanggal 11 dan 12",
  "Melempar jumrah pada hari-hari tasyriq",
  "Mencukur atau memotong rambut",
  "Tawaf Wada' (perpisahan)",
]

const hajiConditions = [
  {
    name: "Islam",
    description: "Beragama Islam",
  },
  {
    name: "Baligh",
    description: "Sudah dewasa (akil baligh)",
  },
  {
    name: "Berakal",
    description: "Sehat akal dan tidak gila",
  },
  {
    name: "Merdeka",
    description: "Bukan budak atau hamba sahaya",
  },
  {
    name: "Mampu",
    description: "Mampu secara fisik, finansial, dan keamanan perjalanan",
  },
  {
    name: "Mahram (Wanita)",
    description: "Wanita harus didampingi mahram atau suami",
  },
]

const umrahSteps = [
  {
    step: 1,
    name: "Ihram",
    description: "Niat umrah dan mengenakan pakaian ihram dari miqat atau tempat tinggal",
  },
  {
    step: 2,
    name: "Tawaf",
    description: "Mengelilingi Ka'bah sebanyak 7 kali dimulai dari Hajar Aswad",
  },
  {
    step: 3,
    name: "Sa'i",
    description: "Berlari-lari kecil antara Shafa dan Marwah sebanyak 7 kali",
  },
  {
    step: 4,
    name: "Tahallul",
    description: "Mencukur atau memotong rambut untuk menyelesaikan umrah",
  },
]

const miqatPlaces = [
  {
    name: "Dzul Hulaifah",
    location: "Madinah",
    distance: "450 km dari Makkah",
    for: "Penduduk Madinah dan yang datang dari arah utara",
  },
  {
    name: "Juhfah",
    location: "Rabigh",
    distance: "187 km dari Makkah",
    for: "Penduduk Syam, Mesir, dan yang datang dari arah barat laut",
  },
  {
    name: "Qarnul Manazil",
    location: "As-Sail Al-Kabir",
    distance: "94 km dari Makkah",
    for: "Penduduk Najd dan yang datang dari arah timur",
  },
  {
    name: "Yalamlam",
    location: "As-Sa'diyyah",
    distance: "54 km dari Makkah",
    for: "Penduduk Yaman dan yang datang dari arah selatan",
  },
  {
    name: "Dzat Irq",
    location: "Dharibunn",
    distance: "94 km dari Makkah",
    for: "Penduduk Irak dan yang datang dari arah timur laut",
  },
]

export default function HajiPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Haji & Umrah"
        description="Panduan lengkap ibadah haji dan umrah dari persiapan hingga pelaksanaan sesuai tuntunan syariat Islam"
        url="https://panduan-ibadah-islam.vercel.app/haji"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Panduan Haji & Umrah
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Panduan Haji & Umrah</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Panduan lengkap ibadah haji dan umrah dari persiapan hingga pelaksanaan sesuai tuntunan syariat Islam
                </p>
              </div>

              {/* Pengertian Haji */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Pengertian Haji dan Umrah</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Haji</h3>
                    <p className="text-muted-foreground text-sm">
                      Haji secara bahasa berarti "menuju" atau "bermaksud". Secara istilah syariat, haji adalah ibadah
                      yang dilakukan dengan mengunjungi Baitullah (Ka'bah) di Makkah pada waktu tertentu (bulan
                      Dzulhijjah) dengan melakukan amalan-amalan tertentu. Haji merupakan rukun Islam yang kelima dan
                      wajib dilakukan sekali seumur hidup bagi yang mampu.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-2">Umrah</h3>
                    <p className="text-muted-foreground text-sm">
                      Umrah secara bahasa berarti "ziarah". Secara istilah syariat, umrah adalah ibadah yang dilakukan
                      dengan mengunjungi Baitullah (Ka'bah) di Makkah tanpa terikat waktu tertentu dengan melakukan
                      tawaf, sa'i, dan tahallul. Umrah hukumnya sunnah muakkad dan dapat dilakukan kapan saja sepanjang
                      tahun.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Syarat Wajib Haji */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Syarat Wajib Haji</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hajiConditions.map((condition, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">{condition.name}</span>
                          <p className="text-xs text-muted-foreground">{condition.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rukun Haji */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Rukun Haji</CardTitle>
                  <CardDescription>
                    Empat rukun haji yang wajib dilakukan, jika salah satu tertinggal maka haji tidak sah
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hajiPillars.map((pillar, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs"
                          >
                            {index + 1}
                          </Badge>
                          <h3 className="font-semibold">{pillar.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                        <p className="text-xs text-muted-foreground">{pillar.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Wajib Haji */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Wajib Haji</CardTitle>
                  <CardDescription>
                    Kewajiban dalam haji yang jika ditinggalkan harus membayar dam (denda)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {hajiObligations.map((obligation, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{obligation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Miqat */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Miqat (Tempat Ihram)</CardTitle>
                  <CardDescription>Batas-batas tempat untuk memulai ihram haji atau umrah</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {miqatPlaces.map((miqat, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card">
                        <h3 className="font-semibold text-sm mb-2">{miqat.name}</h3>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <p>
                            <strong>Lokasi:</strong> {miqat.location}
                          </p>
                          <p>
                            <strong>Jarak:</strong> {miqat.distance}
                          </p>
                          <p>
                            <strong>Untuk:</strong> {miqat.for}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Urutan Pelaksanaan Haji */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Urutan Pelaksanaan Haji
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {hajiSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {index < hajiSteps.length - 1 && (
                          <div className="absolute left-4 top-12 w-0.5 h-16 bg-border"></div>
                        )}
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{step.name}</h3>
                              <Badge variant="outline">{step.day}</Badge>
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                                <MapPin className="w-3 h-3 mr-1" />
                                {step.location}
                              </Badge>
                            </div>
                            <ul className="space-y-1">
                              {step.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 mt-2"></span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Umrah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tata Cara Umrah</CardTitle>
                  <CardDescription>Empat rukun umrah yang harus dilakukan secara berurutan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {umrahSteps.map((step, index) => (
                      <div key={index} className="text-center p-4 rounded-lg border bg-card">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-3">
                          {step.step}
                        </div>
                        <h3 className="font-semibold mb-2">{step.name}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tips dan Persiapan */}
              <Card>
                <CardHeader>
                  <CardTitle>Persiapan dan Tips Haji & Umrah</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Banknote className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Persiapan Finansial</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Siapkan biaya haji/umrah dari harta halal</li>
                        <li>• Lunasi hutang-hutang terlebih dahulu</li>
                        <li>• Sisakan biaya untuk keluarga</li>
                        <li>• Siapkan dana darurat</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Persiapan Fisik & Mental</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Jaga kesehatan fisik</li>
                        <li>• Pelajari manasik haji/umrah</li>
                        <li>• Latih kesabaran dan keikhlasan</li>
                        <li>• Mohon doa dari keluarga</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Persiapan Spiritual</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Bertaubat dari segala dosa</li>
                        <li>• Minta maaf kepada sesama</li>
                        <li>• Perbanyak ibadah sunnah</li>
                        <li>• Niatkan haji/umrah karena Allah</li>
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

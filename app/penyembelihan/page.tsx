import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Beef, Heart, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Penyembelihan Hewan dalam Islam | Kurban, Aqiqah, dan Konsumsi",
  description:
    "Panduan lengkap penyembelihan hewan dalam Islam meliputi kurban, aqiqah, dan untuk konsumsi sehari-hari. Pelajari syarat, tata cara, dan doa penyembelihan.",
  keywords: "penyembelihan hewan, kurban, aqiqah, halal, tata cara penyembelihan, islam",
}

const slaughterTypes = [
  {
    name: "Kurban",
    description: "Penyembelihan hewan pada Hari Raya Idul Adha",
    time: "Tanggal 10-13 Dzulhijjah",
    animals: "Unta, sapi, kerbau, kambing, domba",
    requirements: "Mampu secara finansial, tidak bepergian",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    name: "Aqiqah",
    description: "Penyembelihan hewan untuk bayi yang baru lahir",
    time: "Hari ke-7 setelah kelahiran (boleh setelahnya)",
    animals: "Kambing atau domba",
    requirements: "2 ekor untuk laki-laki, 1 ekor untuk perempuan",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Konsumsi Sehari-hari",
    description: "Penyembelihan hewan untuk kebutuhan makanan",
    time: "Kapan saja (kecuali waktu yang dilarang)",
    animals: "Semua hewan halal",
    requirements: "Sesuai kebutuhan dan kemampuan",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
]

const animalRequirements = [
  {
    animal: "Unta",
    age: "Minimal 5 tahun",
    condition: "Sehat, tidak cacat, gemuk",
    shares: "7 orang",
  },
  {
    animal: "Sapi/Kerbau",
    age: "Minimal 2 tahun",
    condition: "Sehat, tidak cacat, gemuk",
    shares: "7 orang",
  },
  {
    animal: "Kambing",
    age: "Minimal 1 tahun",
    condition: "Sehat, tidak cacat, gemuk",
    shares: "1 orang",
  },
  {
    animal: "Domba",
    age: "Minimal 6 bulan",
    condition: "Sehat, tidak cacat, gemuk",
    shares: "1 orang",
  },
]

const slaughterSteps = [
  "Mempersiapkan pisau yang tajam dan bersih",
  "Membaringkan hewan menghadap kiblat (sisi kiri di bawah)",
  "Membaca basmalah dan takbir",
  "Menyembelih dengan cepat memotong tenggorokan, kerongkongan, dan kedua urat nadi",
  "Menunggu hingga hewan benar-benar mati sebelum dipotong-potong",
  "Membaca doa syukur",
]

const prohibitedTimes = [
  "Setelah shalat Subuh hingga matahari naik setinggi tombak",
  "Saat matahari tepat di tengah (istiwak) hingga condong ke barat",
  "Setelah shalat Ashar hingga matahari terbenam",
]

export default function PenyembelihanPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Penyembelihan Hewan dalam Islam"
        description="Panduan lengkap penyembelihan hewan sesuai syariat Islam untuk kurban, aqiqah, dan konsumsi sehari-hari"
        url="https://panduan-ibadah-islam.vercel.app/penyembelihan"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Beef className="w-4 h-4 mr-2" />
                  Penyembelihan Hewan
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Penyembelihan Hewan dalam Islam</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Panduan lengkap penyembelihan hewan sesuai syariat Islam untuk kurban, aqiqah, dan konsumsi
                  sehari-hari
                </p>
              </div>

              {/* Pengertian */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Pengertian Penyembelihan dalam Islam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Penyembelihan dalam Islam adalah tata cara mematikan hewan dengan cara memotong tenggorokan,
                    kerongkongan, dan kedua urat nadi dengan menyebut nama Allah. Penyembelihan yang benar akan
                    menjadikan daging hewan tersebut halal untuk dikonsumsi dan sah untuk ibadah kurban atau aqiqah.
                  </p>
                </CardContent>
              </Card>

              {/* Jenis Penyembelihan */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Jenis-jenis Penyembelihan</CardTitle>
                  <CardDescription>Berbagai macam penyembelihan hewan dalam Islam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {slaughterTypes.map((type, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-primary">{type.name}</h3>
                          <Badge variant="secondary" className={type.color}>
                            {type.time}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Hewan:</strong> {type.animals}
                          </div>
                          <div>
                            <strong>Syarat:</strong> {type.requirements}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Syarat Hewan */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Syarat-syarat Hewan Kurban/Aqiqah</CardTitle>
                  <CardDescription>Persyaratan hewan yang boleh disembelih untuk kurban dan aqiqah</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Hewan</th>
                          <th className="text-left p-3 font-semibold">Umur Minimal</th>
                          <th className="text-left p-3 font-semibold">Kondisi</th>
                          <th className="text-left p-3 font-semibold">Untuk</th>
                        </tr>
                      </thead>
                      <tbody>
                        {animalRequirements.map((req, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3 font-medium">{req.animal}</td>
                            <td className="p-3 text-sm">{req.age}</td>
                            <td className="p-3 text-sm">{req.condition}</td>
                            <td className="p-3 text-sm">{req.shares}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Cacat yang Tidak Boleh */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Cacat yang Tidak Diperbolehkan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-3">Cacat Mata:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Buta sebelah atau kedua mata</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Mata yang sangat sakit</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Cacat Fisik:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Pincang yang parah</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Kurus kering (tidak ada sumsum tulang)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Sakit parah</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                          <span>Tua renta (tidak ada gigi)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tata Cara Penyembelihan */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Tata Cara Penyembelihan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {slaughterSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm pt-1">{step}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Doa Sebelum Menyembelih:</h4>
                      <p className="arabic-text text-lg mb-2">بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ مِنْكَ وَلَكَ</p>
                      <p className="text-sm text-muted-foreground">
                        "Dengan nama Allah, Allah Maha Besar. Ya Allah, dari-Mu dan untuk-Mu"
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Doa Khusus Kurban:</h4>
                      <p className="arabic-text text-lg mb-2">
                        اللَّهُمَّ تَقَبَّلْ مِنِّي كَمَا تَقَبَّلْتَ مِنْ خَلِيلِكَ إِبْرَاهِيمَ وَحَبِيبِكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِمَا وَسَلَّمَ
                      </p>
                      <p className="text-sm text-muted-foreground">
                        "Ya Allah, terimalah dariku sebagaimana Engkau menerima dari kekasih-Mu Ibrahim dan kekasih-Mu
                        Muhammad shallallahu 'alaihima wa sallam"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Waktu yang Dilarang */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Waktu yang Dilarang untuk Menyembelih
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {prohibitedTimes.map((time, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2"></div>
                        <span className="text-sm">{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <strong>Catatan:</strong> Larangan ini tidak berlaku untuk penyembelihan darurat atau hewan yang
                      sudah terluka parah dan perlu segera disembelih.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Pembagian Daging Kurban */}
              <Card>
                <CardHeader>
                  <CardTitle>Pembagian Daging Kurban</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">1/3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Untuk Keluarga</h3>
                      <p className="text-sm text-muted-foreground">Dikonsumsi oleh keluarga yang berkurban</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">1/3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Untuk Tetangga</h3>
                      <p className="text-sm text-muted-foreground">Diberikan kepada tetangga dan teman</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">1/3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Untuk Fakir Miskin</h3>
                      <p className="text-sm text-muted-foreground">Disedekahkan kepada yang membutuhkan</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      <strong>Catatan:</strong> Pembagian 1/3 ini adalah anjuran. Yang terpenting adalah sebagian daging
                      harus disedekahkan kepada yang membutuhkan.
                    </p>
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

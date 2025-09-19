import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Users, Calendar, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Khutbah Lengkap | Khutbah Jumat, Ied, dan Nikah",
  description:
    "Panduan lengkap menyampaikan khutbah dalam Islam meliputi khutbah Jumat, Ied, nikah, dan acara keagamaan lainnya. Pelajari syarat, rukun, dan tata cara khutbah.",
  keywords: "khutbah, khutbah jumat, khutbah ied, khutbah nikah, tata cara khutbah, islam",
}

const khutbahTypes = [
  {
    name: "Khutbah Jumat",
    description: "Khutbah yang disampaikan sebelum shalat Jumat",
    requirements: "Wajib bagi laki-laki yang shalat Jumat",
    duration: "10-15 menit",
    icon: Calendar,
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Khutbah Ied",
    description: "Khutbah yang disampaikan setelah shalat Ied",
    requirements: "Sunnah muakkad",
    duration: "15-20 menit",
    icon: Users,
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    name: "Khutbah Nikah",
    description: "Khutbah yang disampaikan dalam akad nikah",
    requirements: "Sunnah dalam akad nikah",
    duration: "5-10 menit",
    icon: BookOpen,
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
]

const khutbahConditions = [
  "Beragama Islam",
  "Laki-laki (untuk khutbah Jumat)",
  "Baligh dan berakal",
  "Suci dari hadas besar",
  "Dapat berbahasa Arab (minimal untuk rukun khutbah)",
  "Bersuara keras yang dapat didengar jamaah",
]

const khutbahPillars = [
  "Membaca hamdalah (الحمد لله)",
  "Membaca shalawat kepada Nabi Muhammad SAW",
  "Membaca ayat Al-Quran",
  "Berdoa untuk kaum muslimin",
  "Wasiat takwa kepada Allah SWT",
]

export default function KhutbahPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Khutbah Lengkap"
        description="Pelajari tata cara menyampaikan khutbah dalam berbagai acara keagamaan Islam"
        url="https://panduan-ibadah-islam.vercel.app/khutbah"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Panduan Khutbah
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Panduan Khutbah Lengkap</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Pelajari tata cara menyampaikan khutbah dalam berbagai acara keagamaan Islam
                </p>
              </div>

              {/* Pengertian Khutbah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Pengertian Khutbah</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Khutbah secara bahasa berarti pidato atau ceramah. Dalam istilah syariat Islam, khutbah adalah
                    pidato yang disampaikan dengan syarat dan rukun tertentu pada waktu dan tempat yang telah
                    ditentukan, seperti khutbah Jumat, khutbah Ied, dan khutbah nikah. Khutbah bertujuan untuk
                    memberikan nasihat, pengajaran, dan dakwah kepada umat Islam.
                  </p>
                </CardContent>
              </Card>

              {/* Jenis-jenis Khutbah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Jenis-jenis Khutbah</CardTitle>
                  <CardDescription>Berbagai macam khutbah dalam Islam dan karakteristiknya</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {khutbahTypes.map((type, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <type.icon className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold">{type.name}</h3>
                          </div>
                          <Badge variant="secondary" className={type.color}>
                            {type.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                        <p className="text-sm">
                          <strong>Hukum:</strong> {type.requirements}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Syarat Khatib */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Syarat-syarat Khatib</CardTitle>
                  <CardDescription>Persyaratan yang harus dipenuhi oleh seorang khatib</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {khutbahConditions.map((condition, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{condition}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rukun Khutbah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Rukun Khutbah</CardTitle>
                  <CardDescription>Lima rukun yang harus ada dalam setiap khutbah</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {khutbahPillars.map((pillar, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Khutbah Jumat Detail */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Khutbah Jumat</CardTitle>
                  <CardDescription>Panduan khusus untuk khutbah Jumat</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Syarat Khusus Khutbah Jumat:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dilakukan pada hari Jumat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dilakukan pada waktu dzuhur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dihadiri minimal 40 orang laki-laki mukallaf</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dilakukan di tempat yang tetap (masjid)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Terdiri dari dua khutbah dengan duduk di antara keduanya</span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Struktur Khutbah Jumat:</h3>
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Khutbah Pertama:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Pembukaan dengan hamdalah dan shalawat</li>
                          <li>• Wasiat takwa</li>
                          <li>• Pembacaan ayat Al-Quran</li>
                          <li>• Materi khutbah (nasihat, pengajaran)</li>
                          <li>• Doa untuk kaum muslimin</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Khutbah Kedua:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Pembukaan dengan hamdalah dan shalawat</li>
                          <li>• Wasiat takwa (singkat)</li>
                          <li>• Doa untuk kaum muslimin dan pemimpin</li>
                          <li>• Penutup</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Adab Khutbah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Adab dan Etika Khutbah</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Adab Khatib:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Berpakaian rapi dan bersih</li>
                        <li>• Berdiri saat berkhutbah</li>
                        <li>• Menghadap jamaah</li>
                        <li>• Berbicara dengan suara jelas</li>
                        <li>• Menyampaikan materi yang bermanfaat</li>
                        <li>• Tidak terlalu panjang</li>
                        <li>• Menggunakan bahasa yang mudah dipahami</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Adab Jamaah:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Datang tepat waktu</li>
                        <li>• Duduk dengan tenang</li>
                        <li>• Mendengarkan dengan khusyuk</li>
                        <li>• Tidak berbicara selama khutbah</li>
                        <li>• Tidak bermain handphone</li>
                        <li>• Menghadap ke khatib</li>
                        <li>• Mengaminkan doa khatib</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contoh Pembukaan Khutbah */}
              <Card>
                <CardHeader>
                  <CardTitle>Contoh Pembukaan Khutbah</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="arabic-text text-lg mb-4">
                      إِنَّ الْحَمْدَ لِلَّهِ نَحْمَدُهُ وَنَسْتَعِينُهُ وَنَسْتَغْفِرُهُ وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Sesungguhnya segala puji bagi Allah, kami memuji-Nya, memohon pertolongan-Nya, dan memohon
                      ampunan-Nya. Kami berlindung kepada Allah dari kejahatan diri kami dan dari keburukan amal
                      perbuatan kami."
                    </p>

                    <p className="arabic-text text-lg mb-4">
                      وَأَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Aku bersaksi bahwa tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku
                      bersaksi bahwa Muhammad adalah hamba dan utusan-Nya."
                    </p>

                    <p className="arabic-text text-lg mb-4">
                      يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلاَ تَمُوتُنَّ إِلاَّ وَأَنْتُمْ مُسْلِمُونَ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Hai orang-orang yang beriman, bertakwalah kepada Allah sebenar-benar takwa kepada-Nya, dan
                      janganlah sekali-kali kamu mati melainkan dalam keadaan beragama Islam." (QS. Ali Imran: 102)
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Pengurusan Jenazah dalam Islam | Memandikan, Mengkafani, Menshalatkan",
  description:
    "Panduan lengkap pengurusan jenazah dalam Islam meliputi memandikan, mengkafani, menshalatkan, dan menguburkan jenazah sesuai syariat Islam.",
  keywords: "jenazah, pengurusan jenazah, memandikan jenazah, mengkafani, shalat jenazah, menguburkan, islam",
}

const jenazahSteps = [
  {
    title: "Memandikan Jenazah",
    description: "Membersihkan jenazah dengan air dan sabun",
    details: [
      "Dilakukan oleh orang yang berpengalaman dan sama jenis kelamin",
      "Jenazah dimandikan dengan air hangat dan sabun",
      "Dimulai dari anggota wudhu, kemudian seluruh badan",
      "Minimal 3 kali, maksimal 7 kali (ganjil)",
      "Ditutup auratnya selama proses memandikan",
    ],
  },
  {
    title: "Mengkafani Jenazah",
    description: "Membungkus jenazah dengan kain kafan",
    details: [
      "Laki-laki: 3 lapis kain putih (izar, qamis, lifafah)",
      "Perempuan: 5 lapis kain putih (izar, qamis, khimar, lifafah, dan kain penutup dada)",
      "Kain kafan harus bersih, putih, dan menutupi seluruh badan",
      "Diikat pada bagian kepala dan kaki",
      "Boleh diberi wangi-wangian (non-alkohol)",
    ],
  },
  {
    title: "Menshalatkan Jenazah",
    description: "Melaksanakan shalat jenazah secara berjamaah",
    details: [
      "Hukumnya fardhu kifayah (jika sudah ada yang melakukan, gugur kewajiban yang lain)",
      "Dilakukan secara berjamaah dengan imam",
      "Tidak ada rukuk dan sujud, hanya berdiri",
      "Terdiri dari 4 takbir dengan bacaan khusus",
      "Jenazah diletakkan di depan imam",
    ],
  },
  {
    title: "Menguburkan Jenazah",
    description: "Memakamkan jenazah di tempat yang layak",
    details: [
      "Kubur digali sedalam kurang lebih 1,5 meter",
      "Jenazah dibaringkan menghadap kiblat (miring ke kanan)",
      "Kain pengikat kafan dibuka",
      "Ditutup dengan papan atau batu, kemudian tanah",
      "Dianjurkan membaca doa dan tahlil",
    ],
  },
]

const prayerSteps = [
  {
    takbir: "Takbir Pertama",
    reading: "Membaca Al-Fatihah",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ...",
  },
  {
    takbir: "Takbir Kedua",
    reading: "Membaca Shalawat",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ...",
  },
  {
    takbir: "Takbir Ketiga",
    reading: "Membaca Doa untuk Jenazah",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ...",
  },
  {
    takbir: "Takbir Keempat",
    reading: "Doa Penutup dan Salam",
    arabic: "اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ وَلاَ تَفْتِنَّا بَعْدَهُ...",
  },
]

const importantNotes = [
  "Pengurusan jenazah harus dilakukan sesegera mungkin",
  "Yang berhak memandikan: suami/istri, mahram, atau orang yang berpengalaman",
  "Jenazah syahid di medan perang tidak dimandikan dan dikafani",
  "Bayi yang meninggal sebelum lahir tidak perlu dimandikan",
  "Jenazah non-Muslim tidak boleh dimandikan oleh Muslim",
  "Shalat jenazah boleh dilakukan di masjid atau tempat terbuka",
]

export default function JenazahPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Pengurusan Jenazah dalam Islam"
        description="Panduan lengkap pengurusan jenazah dalam Islam sesuai dengan syariat dan sunnah Rasulullah SAW"
        url="https://panduan-ibadah-islam.vercel.app/jenazah"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Heart className="w-4 h-4 mr-2" />
                  Pengurusan Jenazah
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Pengurusan Jenazah</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Panduan lengkap pengurusan jenazah dalam Islam sesuai dengan syariat dan sunnah Rasulullah SAW
                </p>
              </div>

              {/* Pengertian */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Pengertian Pengurusan Jenazah</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Pengurusan jenazah dalam Islam adalah serangkaian tata cara yang harus dilakukan terhadap orang yang
                    telah meninggal dunia, mulai dari memandikan, mengkafani, menshalatkan, hingga menguburkan. Semua
                    proses ini merupakan kewajiban bagi umat Islam (fardhu kifayah) dan harus dilakukan sesuai dengan
                    tuntunan syariat Islam.
                  </p>
                </CardContent>
              </Card>

              {/* Tahapan Pengurusan Jenazah */}
              <div className="space-y-8 mb-12">
                {jenazahSteps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tata Cara Shalat Jenazah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Tata Cara Shalat Jenazah
                  </CardTitle>
                  <CardDescription>Panduan melaksanakan shalat jenazah dengan 4 takbir</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Niat Shalat Jenazah:</h3>
                    <p className="arabic-text text-lg mb-2">أُصَلِّي عَلَى هَذِهِ الْجَنَازَةِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ الْكِفَايَةِ لِلَّهِ تَعَالَى</p>
                    <p className="text-sm text-muted-foreground">
                      "Aku shalat atas jenazah ini empat takbir, fardhu kifayah karena Allah Ta'ala"
                    </p>
                  </div>

                  <div className="space-y-4">
                    {prayerSteps.map((step, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold">{step.takbir}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{step.reading}</p>
                        <p className="arabic-text text-base">{step.arabic}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Doa untuk Jenazah Laki-laki:</h4>
                    <p className="arabic-text text-lg mb-2">
                      اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, ampunilah dia, rahmatilah dia, berilah kesehatan, maafkanlah dia, muliakanlah tempat
                      tinggalnya, dan lapangkanlah kuburnya"
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Doa untuk Jenazah Perempuan:</h4>
                    <p className="arabic-text text-lg mb-2">
                      اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا وَأَكْرِمْ نُزُلَهَا وَوَسِّعْ مُدْخَلَهَا
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, ampunilah dia, rahmatilah dia, berilah kesehatan, maafkanlah dia, muliakanlah tempat
                      tinggalnya, dan lapangkanlah kuburnya"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Doa di Kuburan */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Doa di Kuburan</CardTitle>
                  <CardDescription>Doa yang dibaca saat menguburkan dan setelah pemakaman</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Doa Saat Memasukkan ke Liang Lahat:</h4>
                    <p className="arabic-text text-lg mb-2">بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُولِ اللَّهِ</p>
                    <p className="text-sm text-muted-foreground">"Dengan nama Allah dan atas agama Rasulullah"</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Doa Setelah Pemakaman:</h4>
                    <p className="arabic-text text-lg mb-2">
                      اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, ampunilah orang yang masih hidup dan yang sudah mati di antara kami, yang hadir dan
                      yang tidak hadir, yang kecil dan yang besar, laki-laki dan perempuan kami"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Hal-hal Penting */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Hal-hal Penting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {importantNotes.map((note, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                        <span className="text-sm">{note}</span>
                      </div>
                    ))}
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Shalat Wajib Lima Waktu | Tata Cara dan Bacaan Lengkap",
  description:
    "Panduan lengkap shalat wajib lima waktu: Subuh, Dzuhur, Ashar, Maghrib, dan Isya. Pelajari tata cara, bacaan, dan doa-doa shalat wajib.",
  keywords: "shalat wajib, lima waktu, subuh, dzuhur, ashar, maghrib, isya, tata cara shalat",
}

const obligatoryPrayers = [
  {
    name: "Shalat Subuh",
    rakaat: 2,
    time: "Dari terbit fajar hingga terbit matahari",
    specialNotes: "Bacaan jahr (keras), sunnah rawatib 2 rakaat sebelumnya",
  },
  {
    name: "Shalat Dzuhur",
    rakaat: 4,
    time: "Dari matahari condong ke barat hingga bayangan sama panjang",
    specialNotes: "Bacaan sirr (pelan), sunnah rawatib 4 rakaat sebelum dan 2 rakaat sesudah",
  },
  {
    name: "Shalat Ashar",
    rakaat: 4,
    time: "Dari bayangan lebih panjang hingga matahari terbenam",
    specialNotes: "Bacaan sirr (pelan), sunnah rawatib 4 rakaat sebelumnya",
  },
  {
    name: "Shalat Maghrib",
    rakaat: 3,
    time: "Dari matahari terbenam hingga hilang mega merah",
    specialNotes: "Bacaan jahr pada 2 rakaat pertama, sunnah rawatib 2 rakaat sesudah",
  },
  {
    name: "Shalat Isya",
    rakaat: 4,
    time: "Dari hilang mega merah hingga terbit fajar",
    specialNotes: "Bacaan jahr pada 2 rakaat pertama, sunnah rawatib 2 rakaat sesudah",
  },
]

const prayerSteps = [
  "Berdiri menghadap kiblat dan berniat",
  "Takbiratul ihram sambil mengangkat kedua tangan",
  "Membaca doa iftitah (sunnah)",
  "Membaca Al-Fatihah",
  "Membaca surat pendek (pada rakaat 1 dan 2)",
  "Rukuk sambil bertakbir",
  "I'tidal (bangkit dari rukuk)",
  "Sujud pertama sambil bertakbir",
  "Duduk antara dua sujud",
  "Sujud kedua sambil bertakbir",
  "Bangkit untuk rakaat berikutnya atau duduk tasyahud",
]

export default function ShalatWajibPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Shalat Wajib Lima Waktu"
        description="Panduan lengkap tata cara shalat wajib lima waktu yang harus dikerjakan setiap hari"
        url="https://panduan-ibadah-islam.vercel.app/shalat/wajib"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Shalat Wajib
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Shalat Wajib Lima Waktu</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Panduan lengkap tata cara shalat wajib lima waktu yang harus dikerjakan setiap hari
                </p>
              </div>

              {/* Prayer Times Detail */}
              <div className="space-y-6 mb-12">
                {obligatoryPrayers.map((prayer, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">{prayer.name}</CardTitle>
                        <Badge variant="outline">{prayer.rakaat} Rakaat</Badge>
                      </div>
                      <CardDescription>
                        <strong>Waktu:</strong> {prayer.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Catatan khusus:</strong> {prayer.specialNotes}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tata Cara Shalat */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tata Cara Shalat</CardTitle>
                  <CardDescription>Langkah-langkah melaksanakan shalat yang benar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prayerSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm pt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bacaan Shalat */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Bacaan-bacaan dalam Shalat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">أُصَلِّي فَرْضَ ... رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku shalat fardhu ... rakaat menghadap kiblat, ada' karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Takbiratul Ihram:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">اللهُ أَكْبَرُ</p>
                      <p className="text-sm text-muted-foreground">"Allahu Akbar" (Allah Maha Besar)</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Doa Iftitah:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">
                        سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ
                      </p>
                      <p className="text-sm text-muted-foreground">
                        "Maha Suci Engkau ya Allah, dan dengan memuji-Mu, dan Maha Berkah nama-Mu, dan Maha Tinggi
                        keagungan-Mu, dan tidak ada Tuhan selain Engkau"
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Bacaan Rukuk:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">سُبْحَانَ رَبِّيَ الْعَظِيْمِ (3x)</p>
                      <p className="text-sm text-muted-foreground">"Maha Suci Tuhanku Yang Maha Agung" (3 kali)</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Bacaan Sujud:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">سُبْحَانَ رَبِّيَ الأَعْلَى (3x)</p>
                      <p className="text-sm text-muted-foreground">"Maha Suci Tuhanku Yang Maha Tinggi" (3 kali)</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Tasyahud Awal:</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="arabic-text text-lg mb-2">
                        التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ
                        اللَّهِ الصَّالِحِيْنَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللَّهِ
                      </p>
                      <p className="text-sm text-muted-foreground">
                        "Segala penghormatan, shalat dan kebaikan hanya bagi Allah. Semoga keselamatan tercurah kepadamu
                        wahai Nabi, demikian pula rahmat Allah dan berkah-Nya..."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    Hal-hal Penting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Shalat wajib tidak boleh ditinggalkan dalam keadaan apapun</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Jika terlambat, segera lakukan qadha (mengganti) shalat yang terlewat
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Dalam perjalanan, shalat 4 rakaat boleh di-qashar menjadi 2 rakaat
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Shalat berjamaah lebih utama daripada shalat sendirian</span>
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

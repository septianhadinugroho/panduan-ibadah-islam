import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Droplets, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Panduan Thaharah (Bersuci) dalam Islam | Wudhu, Tayammum, Mandi Wajib",
  description:
    "Panduan lengkap thaharah dalam Islam meliputi wudhu, tayammum, mandi wajib, dan cara menghilangkan najis. Pelajari syarat, rukun, dan tata cara bersuci yang benar.",
  keywords: "thaharah, bersuci, wudhu, tayammum, mandi wajib, najis, islam",
}

const wudhuSteps = [
  "Membaca basmalah",
  "Mencuci kedua telapak tangan hingga pergelangan 3 kali",
  "Berkumur-kumur 3 kali",
  "Membersihkan hidung (istinsyaq) 3 kali",
  "Mencuci muka 3 kali",
  "Mencuci kedua tangan hingga siku 3 kali",
  "Mengusap kepala 1 kali",
  "Mengusap kedua telinga 1 kali",
  "Mencuci kedua kaki hingga mata kaki 3 kali",
]

const wudhuConditions = [
  "Beragama Islam",
  "Sudah baligh dan berakal",
  "Air yang digunakan suci dan menyucikan",
  "Tidak ada penghalang sampainya air ke kulit",
  "Masuk waktu shalat (untuk wudhu shalat)",
]

const najisTypes = [
  {
    type: "Najis Mukhaffafah (Ringan)",
    examples: "Air kencing bayi laki-laki yang belum makan selain ASI",
    cleaning: "Cukup diperciki air hingga basah",
  },
  {
    type: "Najis Mutawassithah (Sedang)",
    examples: "Air kencing manusia, darah, nanah, muntah",
    cleaning: "Dicuci dengan air hingga hilang warna, bau, dan rasanya",
  },
  {
    type: "Najis Mughallazah (Berat)",
    examples: "Air liur anjing, babi, dan bagian tubuhnya",
    cleaning: "Dicuci 7 kali, salah satunya dengan tanah/debu",
  },
]

export default function ThaharahPage() {
  return (
    <>
      <StructuredData
        type="guide"
        title="Panduan Thaharah (Bersuci) dalam Islam"
        description="Panduan lengkap thaharah dalam Islam meliputi wudhu, tayammum, mandi wajib, dan cara menghilangkan najis"
        url="https://panduan-ibadah-islam.vercel.app/thaharah"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Droplets className="w-4 h-4 mr-2" />
                  Panduan Thaharah
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Thaharah (Bersuci)</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Panduan lengkap bersuci dalam Islam, meliputi wudhu, tayammum, mandi wajib, dan cara menghilangkan
                  najis
                </p>
              </div>

              {/* Pengertian Thaharah */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Pengertian Thaharah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Thaharah secara bahasa berarti bersih dan suci. Secara istilah syariat, thaharah adalah
                    menghilangkan hadats (hadas kecil dan besar) dan najis dengan cara yang telah ditentukan oleh
                    syariat Islam. Thaharah merupakan syarat sahnya shalat dan ibadah lainnya.
                  </p>
                </CardContent>
              </Card>

              {/* Wudhu */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Wudhu</CardTitle>
                  <CardDescription>Wudhu adalah bersuci dari hadas kecil dengan menggunakan air suci</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Syarat Wudhu:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {wudhuConditions.map((condition, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Tata Cara Wudhu:</h3>
                    <div className="space-y-3">
                      {wudhuSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Doa Setelah Wudhu:</h4>
                    <p className="arabic-text text-lg mb-2">
                      أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Aku bersaksi bahwa tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku
                      bersaksi bahwa Muhammad adalah hamba dan utusan-Nya."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tayammum */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tayammum</CardTitle>
                  <CardDescription>
                    Bersuci dengan menggunakan debu/tanah suci ketika tidak ada air atau tidak bisa menggunakan air
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Syarat Boleh Tayammum:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Tidak ada air dalam radius 1 mil (sekitar 2 km)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Sakit yang akan bertambah parah jika menggunakan air</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Air yang ada hanya cukup untuk minum</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Tata Cara Tayammum:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <span className="text-sm">Niat tayammum</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <span className="text-sm">Menepuk kedua telapak tangan ke tanah/debu suci</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <span className="text-sm">Mengusap muka dengan kedua telapak tangan</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <span className="text-sm">Menepuk lagi kedua telapak tangan ke tanah</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          5
                        </div>
                        <span className="text-sm">Mengusap kedua tangan hingga siku</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mandi Wajib */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Mandi Wajib (Mandi Janabah)</CardTitle>
                  <CardDescription>Bersuci dari hadas besar dengan membasuh seluruh tubuh</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Penyebab Wajib Mandi:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Keluar mani (baik saat tidur maupun terjaga)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Bersetubuh (meskipun tidak keluar mani)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Selesai haid atau nifas (bagi wanita)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Masuk Islam (bagi mualaf)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Tata Cara Mandi Wajib:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <span className="text-sm">Niat mandi janabah</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <span className="text-sm">Membersihkan najis yang menempel di badan</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <span className="text-sm">Berwudhu seperti wudhu untuk shalat</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <span className="text-sm">Menyiram kepala 3 kali hingga basah ke akar rambut</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          5
                        </div>
                        <span className="text-sm">Menyiram badan bagian kanan 3 kali</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          6
                        </div>
                        <span className="text-sm">Menyiram badan bagian kiri 3 kali</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Najis */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Menghilangkan Najis</CardTitle>
                  <CardDescription>Panduan membersihkan berbagai jenis najis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {najisTypes.map((najis, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-primary mb-2">{najis.type}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Contoh:</strong> {najis.examples}
                        </p>
                        <p className="text-sm">
                          <strong>Cara membersihkan:</strong> {najis.cleaning}
                        </p>
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

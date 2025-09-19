"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Coins, Calculator, Heart, Users, CheckCircle } from "lucide-react"
import { useState } from "react"

const zakatTypes = [
  {
    name: "Zakat Fitrah",
    description: "Zakat yang wajib dikeluarkan setiap Muslim pada bulan Ramadhan",
    amount: "2,5 kg beras atau senilai uang",
    time: "Sebelum shalat Ied",
    recipients: "Fakir miskin di sekitar tempat tinggal",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    name: "Zakat Mal (Harta)",
    description: "Zakat dari harta yang telah mencapai nisab dan haul",
    amount: "2,5% dari total harta",
    time: "Setelah genap 1 tahun (haul)",
    recipients: "8 golongan mustahik",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Zakat Profesi",
    description: "Zakat dari penghasilan profesi/gaji bulanan",
    amount: "2,5% dari penghasilan bersih",
    time: "Setiap menerima gaji",
    recipients: "8 golongan mustahik",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    name: "Zakat Perdagangan",
    description: "Zakat dari keuntungan usaha dagang",
    amount: "2,5% dari modal + keuntungan",
    time: "Setelah genap 1 tahun",
    recipients: "8 golongan mustahik",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
]

const mustahikGroups = [
  {
    name: "Fakir",
    description: "Orang yang tidak memiliki harta dan penghasilan untuk memenuhi kebutuhan pokok",
  },
  {
    name: "Miskin",
    description: "Orang yang memiliki harta/penghasilan tapi tidak mencukupi kebutuhan pokok",
  },
  {
    name: "Amil",
    description: "Petugas yang bertugas mengumpulkan dan membagikan zakat",
  },
  {
    name: "Muallaf",
    description: "Orang yang baru masuk Islam atau yang hatinya perlu dilembutkan",
  },
  {
    name: "Riqab",
    description: "Budak yang ingin memerdekakan diri (saat ini untuk membebaskan dari jeratan hutang)",
  },
  {
    name: "Gharim",
    description: "Orang yang berhutang untuk kepentingan yang tidak maksiat",
  },
  {
    name: "Fi Sabilillah",
    description: "Orang yang berjuang di jalan Allah (dakwah, pendidikan, dll)",
  },
  {
    name: "Ibnu Sabil",
    description: "Musafir yang kehabisan bekal dalam perjalanan yang tidak maksiat",
  },
]

export default function ZakatClientPage() {
  const [wealth, setWealth] = useState("")
  const [zakatAmount, setZakatAmount] = useState(0)
  const [goldPrice] = useState(1000000) // Harga emas per gram (contoh)
  const nisabGold = 85 // gram
  const nisabSilver = 595 // gram

  const calculateZakat = () => {
    const wealthAmount = Number.parseFloat(wealth)
    if (wealthAmount >= nisabGold * goldPrice) {
      setZakatAmount(wealthAmount * 0.025)
    } else {
      setZakatAmount(0)
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Coins className="w-4 h-4 mr-2" />
                Panduan Zakat
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Panduan Zakat Lengkap</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pelajari berbagai jenis zakat, perhitungan, dan tata cara pembayaran zakat dalam Islam
              </p>
            </div>

            {/* Pengertian Zakat */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Pengertian Zakat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Zakat secara bahasa berarti "tumbuh", "berkah", "bersih", dan "suci". Secara istilah syariat, zakat
                  adalah sejumlah harta tertentu yang wajib dikeluarkan oleh orang yang telah memenuhi syarat dan
                  diberikan kepada yang berhak menerimanya. Zakat merupakan rukun Islam yang ketiga dan memiliki peran
                  penting dalam membersihkan harta dan jiwa serta membantu sesama.
                </p>
              </CardContent>
            </Card>

            {/* Jenis-jenis Zakat */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Jenis-jenis Zakat</CardTitle>
                <CardDescription>Berbagai macam zakat yang wajib dikeluarkan dalam Islam</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {zakatTypes.map((type, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-primary">{type.name}</h3>
                        <Badge variant="secondary" className={type.color}>
                          {type.amount}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Waktu:</strong> {type.time}
                        </div>
                        <div>
                          <strong>Penerima:</strong> {type.recipients}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Kalkulator Zakat */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Kalkulator Zakat Mal
                </CardTitle>
                <CardDescription>Hitung zakat harta Anda dengan mudah</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="wealth">Total Harta (Rupiah)</Label>
                    <Input
                      id="wealth"
                      type="number"
                      placeholder="Masukkan total harta Anda"
                      value={wealth}
                      onChange={(e) => setWealth(e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={calculateZakat} className="w-full">
                      Hitung Zakat
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Nisab Emas:</strong> {nisabGold} gram = Rp{" "}
                      {(nisabGold * goldPrice).toLocaleString("id-ID")}
                    </div>
                    <div>
                      <strong>Nisab Perak:</strong> {nisabSilver} gram = Rp{" "}
                      {(nisabSilver * 15000).toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>

                {zakatAmount > 0 && (
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Hasil Perhitungan:</h4>
                    <p className="text-lg font-bold">
                      Zakat yang harus dibayar: Rp {zakatAmount.toLocaleString("id-ID")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Harta Anda telah mencapai nisab, wajib mengeluarkan zakat 2,5%
                    </p>
                  </div>
                )}

                {wealth && zakatAmount === 0 && (
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      Harta Anda belum mencapai nisab, tidak wajib mengeluarkan zakat. Namun tetap dianjurkan untuk
                      bersedekah.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Syarat Wajib Zakat */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Syarat Wajib Zakat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Syarat Wajib Zakat Fitrah:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Beragama Islam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Hidup pada bulan Ramadhan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Memiliki kelebihan makanan pokok</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Syarat Wajib Zakat Mal:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Beragama Islam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Baligh dan berakal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Harta mencapai nisab</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Telah berlalu satu tahun (haul)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Harta milik penuh</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mustahik (Penerima Zakat) */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />8 Golongan Penerima Zakat (Mustahik)
                </CardTitle>
                <CardDescription>Berdasarkan QS. At-Taubah ayat 60</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mustahikGroups.map((group, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-primary mb-2">
                        {index + 1}. {group.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Ayat Al-Quran tentang Mustahik:</h4>
                  <p className="arabic-text text-lg mb-2">
                    إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ
                    وَابْنِ السَّبِيلِ
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "Sesungguhnya zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin,
                    pengurus-pengurus zakat, para mu'allaf yang dibujuk hatinya, untuk (memerdekakan) budak, orang-orang
                    yang berhutang, untuk jalan Allah dan untuk mereka yang sedang dalam perjalanan..." (QS. At-Taubah:
                    60)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hikmah Zakat */}
            <Card>
              <CardHeader>
                <CardTitle>Hikmah dan Manfaat Zakat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Bagi Muzaki (Pemberi):</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Membersihkan harta dari hak orang lain</li>
                      <li>• Mensucikan jiwa dari sifat kikir dan tamak</li>
                      <li>• Mendekatkan diri kepada Allah SWT</li>
                      <li>• Mendapat pahala dan keberkahan</li>
                      <li>• Melatih kepedulian sosial</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Bagi Masyarakat:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mengurangi kesenjangan ekonomi</li>
                      <li>• Membantu fakir miskin memenuhi kebutuhan</li>
                      <li>• Menciptakan keharmonisan sosial</li>
                      <li>• Menggerakkan roda perekonomian</li>
                      <li>• Mewujudkan keadilan sosial</li>
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

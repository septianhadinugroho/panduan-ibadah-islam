import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, ArrowLeft, Star, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Witir | Tata Cara dan Doa Qunut",
  description:
    "Pelajari shalat witir lengkap dengan tata cara, doa qunut, dan keutamaannya sebagai penutup shalat malam.",
  keywords: "shalat witir, doa qunut, tata cara witir, keutamaan witir, shalat malam",
}

const witrOptions = [
  {
    rakaat: 1,
    description: "Minimal dan paling mudah",
    method: "Langsung 1 rakaat dengan qunut",
  },
  {
    rakaat: 3,
    description: "Paling dianjurkan",
    method: "2 rakaat salam, lalu 1 rakaat atau 3 rakaat langsung",
  },
  {
    rakaat: 5,
    description: "Untuk yang ingin lebih",
    method: "4 rakaat salam, lalu 1 rakaat atau 5 rakaat langsung",
  },
  {
    rakaat: 7,
    description: "Sunnah muakkad",
    method: "6 rakaat salam, lalu 1 rakaat atau 7 rakaat langsung",
  },
  {
    rakaat: 9,
    description: "Mengikuti Rasulullah",
    method: "8 rakaat salam, lalu 1 rakaat atau 9 rakaat langsung",
  },
  {
    rakaat: 11,
    description: "Maksimal yang disunnahkan",
    method: "10 rakaat salam, lalu 1 rakaat atau 11 rakaat langsung",
  },
]

export default function ShalatWitrPage() {
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
                <Moon className="w-4 h-4 mr-2" />
                Shalat Witir
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Witir</h1>
              <p className="text-xl text-muted-foreground">
                Shalat sunnah muakkad dengan rakaat ganjil sebagai penutup shalat malam
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Witir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Witir berasal dari kata "watr" yang berarti ganjil. Shalat witir adalah shalat sunnah muakkad yang
                  dikerjakan dengan jumlah rakaat ganjil, biasanya sebagai penutup shalat malam.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-sm font-medium text-teal-800">
                    "Sesungguhnya Allah itu witir (ganjil) dan menyukai yang witir. Maka kerjakanlah shalat witir, wahai
                    ahli Al-Quran!"
                    <span className="text-teal-600">(HR. Abu Dawud dan Tirmidzi)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Time */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Waktu Pelaksanaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Waktu yang Dianjurkan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Mulai:</strong> Setelah shalat isya
                      </li>
                      <li>
                        • <strong>Berakhir:</strong> Sebelum waktu subuh
                      </li>
                      <li>
                        • <strong>Paling utama:</strong> Sepertiga malam terakhir
                      </li>
                      <li>
                        • <strong>Untuk yang tidur awal:</strong> Setelah isya langsung
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Posisi dalam Shalat Malam:</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>Urutan yang dianjurkan:</strong>
                      </p>
                      <ol className="text-sm text-blue-700 space-y-1">
                        <li>1. Shalat tahajud/qiyamul lail</li>
                        <li>2. Shalat witir (sebagai penutup)</li>
                        <li>3. Tidak ada shalat sunnah setelah witir</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Number of Rakaats */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Pilihan Jumlah Rakaat
                </CardTitle>
                <CardDescription>Semua bilangan ganjil diperbolehkan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {witrOptions.map((option, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-primary">{option.rakaat}</span>
                        <Badge variant="outline" className="text-xs">
                          {option.rakaat === 1 ? "Minimal" : option.rakaat === 3 ? "Utama" : "Sunnah"}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium mb-2">{option.description}</p>
                      <p className="text-xs text-muted-foreground">{option.method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Witir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Cara Melakukan Witir 3 Rakaat:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2 text-green-700">Cara Pertama (Terpisah):</h4>
                        <ol className="text-sm space-y-1">
                          <li>1. Shalat 2 rakaat, salam</li>
                          <li>2. Shalat 1 rakaat dengan qunut</li>
                          <li>3. Salam</li>
                        </ol>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2 text-blue-700">Cara Kedua (Bersambung):</h4>
                        <ol className="text-sm space-y-1">
                          <li>1. Shalat 3 rakaat langsung</li>
                          <li>2. Tasyahud awal di rakaat ke-2</li>
                          <li>3. Qunut di rakaat ke-3</li>
                          <li>4. Tasyahud akhir dan salam</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Witir:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Arab:</p>
                      <p className="text-lg mb-3 font-arabic">أُصَلِّي سُنَّةَ الْوِتْرِ ثَلَاثَ رَكَعَاتٍ لِلَّهِ تَعَالَى</p>
                      <p className="text-sm mb-2 font-medium">Latin:</p>
                      <p className="text-sm mb-3">"Ushalli sunnatal witri tsalaatsa raka'aatin lillahi ta'ala"</p>
                      <p className="text-sm font-medium">Artinya:</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku niat shalat sunnah witir tiga rakaat karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dua Qunut */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Doa Qunut Witir</CardTitle>
                <CardDescription>Doa yang dibaca setelah rukuk di rakaat terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm mb-2 font-medium">Doa Qunut (Versi Pendek):</p>
                    <p className="text-lg mb-3 font-arabic text-right leading-loose">
                      اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ إِنَّكَ
                      تَقْضِي وَلَا يُقْضَى عَلَيْكَ وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ وَلَا يَعِزُّ مَنْ عَادَيْتَ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ
                    </p>
                    <p className="text-sm mb-3">
                      "Allahummahdini fiman hadaita, wa 'afini fiman 'afaita, wa tawallani fiman tawallaita, wa barik li
                      fima a'thaita, wa qini syarra ma qadhaita, innaka taqdhi wa la yuqdha 'alaika, wa innahu la
                      yadzillu man walaita, wa la ya'izzu man 'adaita, tabarakta rabbana wa ta'alaita"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "Ya Allah, berilah aku petunjuk sebagaimana Engkau beri petunjuk kepada orang-orang yang Engkau
                      beri petunjuk. Berilah aku kesehatan sebagaimana Engkau beri kesehatan kepada orang-orang yang
                      Engkau beri kesehatan. Pimpinlah aku sebagaimana Engkau pimpin orang-orang yang Engkau pimpin.
                      Berkahilah untukku apa yang Engkau berikan kepadaku. Lindungilah aku dari keburukan apa yang
                      Engkau takdirkan. Sesungguhnya Engkau yang menentukan dan tidak ada yang menentukan atas-Mu.
                      Sesungguhnya tidak akan hina orang yang Engkau pimpin dan tidak akan mulia orang yang Engkau
                      musuhi. Maha Berkah Engkau wahai Tuhan kami dan Maha Tinggi."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-2">Tambahan Doa (Opsional):</p>
                    <p className="text-lg mb-3 font-arabic text-right">وَصَلَّى اللَّهُ عَلَى النَّبِيِّ الْأُمِّيِّ وَآلِهِ وَسَلَّمَ</p>
                    <p className="text-sm text-blue-700">
                      "Wa shallallahu 'alan nabiyyil ummiyyi wa alihi wa sallam"
                      <br />
                      "Dan semoga Allah melimpahkan shalawat kepada Nabi yang ummi beserta keluarganya"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keutamaan dan Manfaat Shalat Witir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Keutamaan:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Sunnah muakkad yang sangat dianjurkan</li>
                      <li>• Penutup yang sempurna untuk shalat malam</li>
                      <li>• Mendapat kecintaan Allah (Allah menyukai yang ganjil)</li>
                      <li>• Menyempurnakan ibadah malam hari</li>
                      <li>• Mendapat pahala berlipat ganda</li>
                      <li>• Doa qunut mudah dikabulkan</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Tips Konsisten:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mulai dengan 1 rakaat jika baru memulai</li>
                      <li>• Kerjakan setelah isya jika takut ketiduran</li>
                      <li>• Jangan tinggalkan meski sedang bepergian</li>
                      <li>• Bisa dikerjakan sambil duduk jika sakit</li>
                      <li>• Perbanyak istighfar dalam qunut</li>
                      <li>• Jadikan sebagai penutup shalat malam</li>
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

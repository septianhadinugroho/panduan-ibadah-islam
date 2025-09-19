import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ArrowLeft, HelpCircle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panduan Lengkap Shalat Istikharah | Tata Cara dan Doa Istikharah",
  description: "Pelajari shalat istikharah lengkap dengan tata cara, doa istikharah, dan cara memahami petunjuk Allah.",
  keywords: "shalat istikharah, doa istikharah, tata cara istikharah, petunjuk Allah, keputusan",
}

const situations = [
  "Memilih pekerjaan atau karir",
  "Menentukan jodoh atau menikah",
  "Membeli rumah atau investasi",
  "Pindah tempat tinggal",
  "Memulai bisnis atau usaha",
  "Melanjutkan pendidikan",
  "Mengambil keputusan penting lainnya",
]

export default function ShalatIstikarahPage() {
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
                <Heart className="w-4 h-4 mr-2" />
                Shalat Istikharah
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Panduan Lengkap Shalat Istikharah</h1>
              <p className="text-xl text-muted-foreground">
                Shalat untuk meminta petunjuk Allah SWT dalam mengambil keputusan penting dalam hidup
              </p>
            </div>

            {/* Definition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Pengertian Shalat Istikharah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Istikharah berasal dari kata "khaira" yang berarti kebaikan. Shalat istikharah adalah shalat sunnah
                  yang dikerjakan untuk meminta petunjuk Allah SWT dalam menentukan pilihan yang terbaik.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-800">
                    "Jika salah seorang di antara kalian hendak melakukan suatu urusan, maka hendaklah ia shalat dua
                    rakaat selain shalat wajib, kemudian hendaklah ia berdoa..."
                    <span className="text-green-600">(HR. Bukhari)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* When to do Istikharah */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Kapan Melakukan Istikharah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Situasi yang Tepat:</h3>
                    <ul className="space-y-2 text-sm">
                      {situations.map((situation, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                          {situation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Yang Perlu Diingat:</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Tidak untuk hal yang sudah jelas hukumnya</li>
                        <li>• Tidak untuk memilih antara halal dan haram</li>
                        <li>• Dilakukan setelah berfikir dan bermusyawarah</li>
                        <li>• Niatkan untuk menerima keputusan Allah</li>
                        <li>• Bisa diulang jika masih ragu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Perform */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tata Cara Shalat Istikharah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Langkah-langkah:</h3>
                    <ol className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          1
                        </span>
                        <div>
                          <strong>Persiapan:</strong> Berwudhu, cari tempat yang tenang, hadap kiblat
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          2
                        </span>
                        <div>
                          <strong>Niat:</strong> Berniat shalat istikharah 2 rakaat
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          3
                        </span>
                        <div>
                          <strong>Shalat:</strong> Kerjakan 2 rakaat seperti shalat sunnah biasa
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          4
                        </span>
                        <div>
                          <strong>Doa:</strong> Baca doa istikharah setelah salam
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          5
                        </span>
                        <div>
                          <strong>Tawakal:</strong> Serahkan keputusan kepada Allah dan ambil tindakan
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Niat Shalat Istikharah:</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm mb-2 font-medium">Arab:</p>
                      <p className="text-lg mb-3 font-arabic">أُصَلِّي سُنَّةَ الْاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى</p>
                      <p className="text-sm mb-2 font-medium">Latin:</p>
                      <p className="text-sm mb-3">"Ushalli sunnatal istikhaarati rak'ataini lillahi ta'ala"</p>
                      <p className="text-sm font-medium">Artinya:</p>
                      <p className="text-sm text-muted-foreground">
                        "Aku niat shalat sunnah istikharah dua rakaat karena Allah Ta'ala"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dua Istikharah */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Doa Istikharah</CardTitle>
                <CardDescription>Doa yang dibaca setelah shalat istikharah</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-lg mb-3 font-arabic text-right leading-loose">
                      اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ
                      وَأَنْتَ عَلَّامُ الْغُيُوبِ
                    </p>
                    <p className="text-lg mb-3 font-arabic text-right leading-loose">
                      اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ
                    </p>
                    <p className="text-lg mb-4 font-arabic text-right leading-loose">
                      وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ
                      حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ
                    </p>

                    <div className="border-t pt-4">
                      <p className="text-sm font-medium mb-2">Artinya:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Ya Allah, sesungguhnya aku meminta petunjuk-Mu dengan ilmu-Mu, dan aku meminta kekuatan-Mu
                        dengan kekuasaan-Mu, dan aku memohon kepada-Mu dari karunia-Mu yang agung. Karena sesungguhnya
                        Engkau berkuasa dan aku tidak berkuasa, Engkau mengetahui dan aku tidak mengetahui, dan Engkau
                        Maha Mengetahui hal-hal yang gaib.
                        <br />
                        <br />
                        Ya Allah, jika Engkau mengetahui bahwa urusan ini baik bagiku dalam agamaku, kehidupanku, dan
                        akibat urusanku, maka takdirkanlah untukku dan mudahkanlah bagiku, kemudian berkahilah aku
                        padanya.
                        <br />
                        <br />
                        Dan jika Engkau mengetahui bahwa urusan ini buruk bagiku dalam agamaku, kehidupanku, dan akibat
                        urusanku, maka palingkanlah dariku dan palingkanlah aku darinya, dan takdirkanlah kebaikan
                        untukku di mana pun berada, kemudian ridhoilah aku dengannya."
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-2">Catatan Penting:</p>
                    <p className="text-sm text-blue-700">
                      Pada bagian "هَذَا الْأَمْرَ" (urusan ini), sebutkan secara spesifik urusan yang ingin dimintakan
                      petunjuk. Misalnya: "menikah dengan si fulan", "mengambil pekerjaan di tempat ini", dll.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Understanding the Signs */}
            <Card>
              <CardHeader>
                <CardTitle>Memahami Petunjuk Allah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Tanda-tanda Positif:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Hati merasa tenang dan yakin</li>
                      <li>• Urusan menjadi mudah dan lancar</li>
                      <li>• Mendapat dukungan dari orang-orang baik</li>
                      <li>• Tidak ada halangan yang berarti</li>
                      <li>• Merasa diberi kekuatan untuk melakukan</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Tanda-tanda Negatif:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Hati merasa gelisah dan ragu</li>
                      <li>• Banyak halangan dan kesulitan</li>
                      <li>• Mendapat penolakan dari berbagai pihak</li>
                      <li>• Merasa tidak ada kekuatan untuk melakukan</li>
                      <li>• Muncul alternatif yang lebih baik</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800 mb-2">Penting untuk Diingat:</p>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Istikharah bukan untuk melihat mimpi atau mendapat "wangsit"</li>
                    <li>• Petunjuk Allah datang melalui kemudahan atau kesulitan dalam urusan</li>
                    <li>• Tetap berusaha dan berdo'a setelah istikharah</li>
                    <li>• Terima dengan ikhlas apapun hasilnya</li>
                  </ul>
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

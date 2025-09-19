import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Clock, Heart, Users, ArrowRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

const worshipGuides = [
  {
    title: "Thaharah",
    description: "Panduan lengkap bersuci dalam Islam, meliputi wudhu, tayammum, mandi wajib, dan najis",
    href: "/thaharah",
    icon: "🚿",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Shalat Wajib",
    description: "Tata cara shalat lima waktu, syarat, rukun, dan hal-hal yang membatalkan shalat",
    href: "/shalat/wajib",
    icon: "🕌",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Shalat Sunnah",
    description: "Panduan shalat sunnah rawatib, tahajud, dhuha, istikharah, dan shalat sunnah lainnya",
    href: "/shalat/sunnah",
    icon: "🌙",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    title: "Khutbah",
    description: "Panduan menyampaikan khutbah Jumat, Ied, dan khutbah pada acara keagamaan",
    href: "/khutbah",
    icon: "📖",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "Pengurusan Jenazah",
    description: "Tata cara memandikan, mengkafani, menshalatkan, dan menguburkan jenazah",
    href: "/jenazah",
    icon: "🤲",
    color: "bg-gray-50 text-gray-700 border-gray-200",
  },
  {
    title: "Penyembelihan Hewan",
    description: "Panduan penyembelihan hewan kurban, aqiqah, dan konsumsi sehari-hari",
    href: "/penyembelihan",
    icon: "🐑",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "Zakat",
    description: "Perhitungan dan tata cara zakat fitrah, zakat mal, dan zakat profesi",
    href: "/zakat",
    icon: "💰",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Haji & Umrah",
    description: "Panduan lengkap ibadah haji dan umrah, dari persiapan hingga pelaksanaan",
    href: "/haji",
    icon: "🕋",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "Panduan Lengkap",
    description: "Setiap panduan disusun secara detail dan mudah dipahami",
  },
  {
    icon: Clock,
    title: "Selalu Update",
    description: "Konten selalu diperbarui sesuai dengan perkembangan terkini",
  },
  {
    icon: Heart,
    title: "Mudah Dipahami",
    description: "Bahasa yang sederhana dan contoh praktis dalam kehidupan sehari-hari",
  },
  {
    icon: Users,
    title: "Untuk Semua",
    description: "Cocok untuk pemula maupun yang ingin memperdalam ilmu agama",
  },
]

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="website"
        title="Panduan Ibadah Islam Lengkap"
        description="Panduan lengkap ibadah Islam meliputi thaharah, shalat wajib dan sunnah, khutbah, pengurusan jenazah, penyembelihan hewan, zakat, dan haji"
        url="https://panduan-ibadah-islam.vercel.app"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />

          <main>
            {/* Hero Section */}
            <section className="relative py-20 px-4 islamic-pattern">
              <div className="container mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                  <Badge variant="secondary" className="mb-4">
                    Panduan Terpercaya
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                    Panduan Lengkap
                    <span className="text-primary block">Ibadah Islam</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
                    Pelajari tata cara ibadah Islam yang benar dengan panduan lengkap dan mudah dipahami. Dari thaharah
                    hingga haji, semua ada di sini.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="#panduan">
                        Mulai Belajar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/tentang">Tentang Kami</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Panduan Kami?</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Kami menyediakan panduan ibadah yang komprehensif dan mudah dipahami
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Worship Guides Section */}
            <section id="panduan" className="py-20 px-4 bg-muted/30">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Panduan Ibadah Lengkap</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Pilih panduan ibadah yang ingin Anda pelajari
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {worshipGuides.map((guide, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-2xl">{guide.icon}</div>
                          <Badge variant="secondary" className={guide.color}>
                            Lengkap
                          </Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{guide.description}</CardDescription>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                        >
                          <Link href={guide.href}>
                            Pelajari Sekarang
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Mulai Perjalanan Ibadah Anda</h2>
                      <p className="text-xl opacity-90 mb-8">
                        Bergabunglah dengan ribuan Muslim yang telah memperdalam ilmu agama melalui panduan kami
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                          <Link href="/thaharah">Mulai dari Thaharah</Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                          <Link href="/shalat">Pelajari Shalat</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

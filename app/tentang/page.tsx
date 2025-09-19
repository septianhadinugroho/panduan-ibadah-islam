import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tentang Kami - Panduan Ibadah Islam",
  description: "Mengenal pengembang dan teknologi di balik website Panduan Ibadah Islam yang komprehensif.",
  keywords: "tentang kami, pengembang, fullstack developer, Next.js, Islamic website",
  openGraph: {
    title: "Tentang Kami - Panduan Ibadah Islam",
    description: "Mengenal pengembang dan teknologi di balik website Panduan Ibadah Islam yang komprehensif.",
    type: "website",
  },
}

export default function TentangPage() {
  const techStack = [
    { name: "Next.js", icon: Globe, description: "React framework untuk aplikasi web modern" },
    { name: "TypeScript", icon: Code, description: "JavaScript dengan type safety" },
    { name: "Tailwind CSS", icon: Smartphone, description: "Utility-first CSS framework" },
    { name: "Shadcn/ui", icon: Database, description: "Komponen UI yang dapat diakses" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">Tentang Kami</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mengenal lebih dekat pengembang dan teknologi di balik website Panduan Ibadah Islam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About Developer */}
          <Card className="border-emerald-200 dark:border-emerald-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Pengembang</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                    Septian Hadi Nugroho
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    Fullstack Developer
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Seorang fullstack developer yang berfokus pada pengembangan aplikasi web modern dengan teknologi
                  terkini. Memiliki passion dalam menciptakan solusi digital yang bermanfaat untuk masyarakat.
                </p>

                <div className="pt-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Keahlian:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Frontend Development</Badge>
                    <Badge variant="outline">Backend Development</Badge>
                    <Badge variant="outline">Database Design</Badge>
                    <Badge variant="outline">UI/UX Design</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Website */}
          <Card className="border-emerald-200 dark:border-emerald-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Tentang Website</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Website Panduan Ibadah Islam ini dikembangkan dengan tujuan menyediakan panduan lengkap dan mudah
                  diakses untuk berbagai aspek ibadah dalam Islam. Dari thaharah hingga haji, semua disajikan dengan
                  antarmuka yang modern dan responsif.
                </p>

                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Fitur Utama:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Panduan lengkap thaharah dan shalat</li>
                    <li>• Materi khutbah dan pengurusan jenazah</li>
                    <li>• Kalkulator zakat interaktif</li>
                    <li>• Panduan haji dan umrah</li>
                    <li>• Desain responsif untuk semua perangkat</li>
                    <li>• Mode gelap dan terang</li>
                    <li>• SEO optimized</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <Card className="border-emerald-200 dark:border-emerald-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Teknologi yang Digunakan</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <tech.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Website ini dibangun dengan teknologi modern untuk memberikan pengalaman pengguna yang optimal dan
                  performa yang cepat.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
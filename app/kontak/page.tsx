import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak Kami - Panduan Ibadah Islam",
  description: "Hubungi kami untuk pertanyaan, saran, atau feedback mengenai website Panduan Ibadah Islam.",
  keywords: "kontak, hubungi kami, feedback, saran, LinkedIn, Instagram",
  openGraph: {
    title: "Kontak Kami - Panduan Ibadah Islam",
    description: "Hubungi kami untuk pertanyaan, saran, atau feedback mengenai website Panduan Ibadah Islam.",
    type: "website",
  },
}

export default function KontakPage() {
  const contactMethods = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Terhubung secara profesional",
      link: "https://linkedin.com/in/septian-hadi-nugroho",
      color: "bg-blue-600 hover:bg-blue-700",
      badge: "Profesional",
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Ikuti update terbaru",
      link: "https://instagram.com/septianhnr",
      color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      badge: "Sosial Media",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">Kontak Kami</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hubungi kami untuk pertanyaan, saran, atau feedback mengenai website Panduan Ibadah Islam
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-emerald-200 dark:border-emerald-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full ${method.color} text-white`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300">{method.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {method.badge}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{method.description}</p>

                  <Button asChild className={`w-full ${method.color} text-white border-0`}>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <method.icon className="w-4 h-4" />
                      <span>Kunjungi {method.name}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="border-emerald-200 dark:border-emerald-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <MessageCircle className="w-6 h-6" />
                <span>Informasi Tambahan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                    Tentang Feedback
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Kami sangat menghargai masukan dan saran dari Anda untuk terus meningkatkan kualitas website ini.
                    Jangan ragu untuk menghubungi kami melalui media sosial yang tersedia.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Waktu Respon</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Kami berusaha merespon setiap pesan dalam waktu 1-2 hari kerja. Untuk pertanyaan yang lebih
                    kompleks, mungkin memerlukan waktu lebih lama.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Kolaborasi</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Jika Anda tertarik untuk berkolaborasi dalam pengembangan konten atau fitur baru, silakan hubungi
                    kami melalui LinkedIn untuk diskusi lebih lanjut.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Mari Terhubung!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ikuti perkembangan terbaru dan berikan masukan untuk website yang lebih baik
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a
                      href="https://linkedin.com/in/septian-hadi-nugroho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <a
                      href="https://instagram.com/septian.hadi.nugroho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

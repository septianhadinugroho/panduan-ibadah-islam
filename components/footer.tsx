import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">إ</span>
              </div>
              <span className="font-bold text-xl text-primary">Panduan Ibadah</span>
            </div>
            <p className="text-sm text-muted-foreground">Panduan lengkap ibadah Islam untuk umat Muslim Indonesia</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Panduan Utama</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/thaharah" className="text-muted-foreground hover:text-primary">
                  Thaharah
                </Link>
              </li>
              <li>
                <Link href="/shalat" className="text-muted-foreground hover:text-primary">
                  Shalat
                </Link>
              </li>
              <li>
                <Link href="/zakat" className="text-muted-foreground hover:text-primary">
                  Zakat
                </Link>
              </li>
              <li>
                <Link href="/haji" className="text-muted-foreground hover:text-primary">
                  Haji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Panduan Lainnya</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/khutbah" className="text-muted-foreground hover:text-primary">
                  Khutbah
                </Link>
              </li>
              <li>
                <Link href="/jenazah" className="text-muted-foreground hover:text-primary">
                  Pengurusan Jenazah
                </Link>
              </li>
              <li>
                <Link href="/penyembelihan" className="text-muted-foreground hover:text-primary">
                  Penyembelihan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-muted-foreground hover:text-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Panduan Ibadah Islam. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

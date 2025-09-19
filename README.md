# 🕌 Panduan Ibadah Islam

Website komprehensif yang menyediakan panduan lengkap untuk berbagai aspek ibadah dalam Islam, mulai dari thaharah hingga haji. Dibangun dengan teknologi modern untuk memberikan pengalaman pengguna terbaik.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Educational-green?style=flat-square)](LICENSE)

## 🌟 Fitur Utama

### 📖 Konten Ibadah
- **🧼 Panduan Thaharah** - Petunjuk lengkap tentang bersuci dalam Islam
- **🤲 Panduan Shalat** - Shalat wajib dan sunnah dengan detail lengkap
- **📢 Khutbah** - Kumpulan materi khutbah dan panduan berkhotbah
- **⚰️ Pengurusan Jenazah** - Tata cara pengurusan jenazah sesuai syariat
- **🐄 Penyembelihan Hewan** - Panduan penyembelihan yang benar menurut Islam
- **💰 Kalkulator Zakat** - Tool interaktif untuk menghitung berbagai jenis zakat
- **🕋 Panduan Haji** - Panduan lengkap ibadah haji dan umrah

### ⚡ Fitur Teknis
- ✅ **Responsive Design** - Optimal di semua perangkat
- ✅ **Dark/Light Mode** - Pilihan tema sesuai preferensi
- ✅ **SEO Optimized** - Mudah ditemukan di search engine
- ✅ **Fast Loading** - Optimasi Next.js untuk performa terbaik
- ✅ **Accessible UI** - Dapat diakses oleh penyandang disabilitas
- ✅ **PWA Ready** - Dapat diinstall seperti aplikasi mobile

## 🚀 Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [Next.js](https://nextjs.org/) | 15 | React framework dengan App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4+ | Utility-first CSS framework |
| [Shadcn/ui](https://ui.shadcn.com/) | Latest | Beautiful UI components |
| [Lucide React](https://lucide.dev/) | Latest | Icon library |

## 🛠️ Quick Start

### Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** atau **yarn** package manager

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/username/panduan-ibadah-islam.git
   cd panduan-ibadah-islam
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau menggunakan yarn
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Open browser**
   
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat website

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Start production server
npm start

# Preview build locally
npm run preview
```

## 📁 Project Structure

```
panduan-ibadah-islam/
├── 📂 app/                     # Next.js App Router
│   ├── 🎨 globals.css         # Global styles & Tailwind
│   ├── 📄 layout.tsx          # Root layout component
│   ├── 🏠 page.tsx            # Homepage
│   ├── 📂 thaharah/           # Panduan bersuci
│   ├── 📂 shalat/             # Panduan shalat
│   │   ├── 📂 wajib/          # • Shalat fardhu
│   │   └── 📂 sunnah/         # • Shalat sunnah
│   ├── 📂 khutbah/            # Panduan khutbah
│   ├── 📂 jenazah/            # Pengurusan jenazah
│   ├── 📂 penyembelihan/      # Penyembelihan hewan
│   ├── 📂 zakat/              # Panduan & kalkulator zakat
│   ├── 📂 haji/               # Panduan haji & umrah
│   ├── 📂 tentang/            # About page
│   └── 📂 kontak/             # Contact page
├── 📂 components/              # Reusable components
│   ├── 📂 ui/                 # Shadcn/ui components
│   ├── 🧭 header.tsx          # Navigation header
│   ├── 🦶 footer.tsx          # Footer component
│   └── 🎭 theme-provider.tsx  # Theme context
├── 📂 lib/                    # Utilities
│   └── 🔧 utils.ts            # Helper functions
├── 📂 public/                 # Static assets
├── 📄 next.config.js          # Next.js configuration
├── 📄 tailwind.config.ts      # Tailwind configuration
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 package.json            # Dependencies & scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Emerald & Teal - Nuansa Islami yang tenang
- **Secondary**: Warm grays untuk readability
- **Accent**: Gold untuk highlighting

### Typography
- **Headings**: Geist Sans untuk modern look
- **Body**: System fonts untuk optimal performance
- **Arabic**: Support font Arab untuk ayat dan hadits

### Components
- Konsisten dengan Shadcn/ui design system
- Responsive breakpoints: `sm` `md` `lg` `xl` `2xl`
- Accessibility-first approach

## 📊 Performance & SEO

### Core Web Vitals
- ⚡ **LCP** < 2.5s - Optimized image loading
- 🎯 **FID** < 100ms - Minimal JavaScript blocking
- 📏 **CLS** < 0.1 - Stable layout shifts

### SEO Features
- 🏷️ Complete meta tags untuk setiap halaman
- 🌐 Open Graph untuk social media sharing
- 🗂️ Structured data (JSON-LD) untuk rich snippets
- 🗺️ Auto-generated sitemap.xml
- 🤖 Optimized robots.txt
- 🔍 Search-friendly URLs

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ ✅ |
| Firefox | 90+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |

## 🤝 Contributing

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. **Fork** repository ini
2. **Create** branch fitur baru (`git checkout -b feature/amazing-feature`)
3. **Commit** perubahan (`git commit -m 'Add some amazing feature'`)
4. **Push** ke branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### Guidelines
- Ikuti [Conventional Commits](https://www.conventionalcommits.org/) untuk pesan commit
- Pastikan code pass semua tests
- Update dokumentasi jika diperlukan

## 👨‍💻 Developer

**Septian Hadi Nugroho**
- 🎯 Fullstack Developer
- 🌟 Spesialisasi: Modern web development dengan React/Next.js ecosystem
- 📍 Indonesia

### Connect With Me
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/septian-hadi-nugroho)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/septianhnr)

## 📋 Roadmap

### 🚧 In Progress
- [ ] Fitur bookmark untuk menyimpan panduan favorit
- [ ] Pencarian global di seluruh konten
- [ ] Notifikasi pengingat waktu shalat

### 🔮 Future Plans
- [ ] Mobile app (React Native)
- [ ] Audio panduan doa dan bacaan
- [ ] Multi-language support (English, Malay)
- [ ] Community features (tanya jawab)

## 📄 License

Project ini dibuat untuk tujuan **edukasi dan dakwah Islam**. 

```
Copyright (c) 2025 Septian Hadi Nugroho

Permission is granted to use, copy, modify, and distribute this software
for educational and Islamic dawah purposes, provided that the above
copyright notice and this permission notice appear in all copies.
```

## 🙏 Acknowledgments

- 📚 **Referensi**: Kitab-kitab fiqh mu'tabarah
- 👥 **Community**: Kontribusi dan feedback dari komunitas Muslim
- 🛠️ **Tools**: Terima kasih kepada tim Next.js, Tailwind, dan Shadcn/ui

---

<div align="center">

### 🤲 Barakallahu fiikum

*Semoga website ini bermanfaat untuk umat Islam dalam menjalankan ibadah dengan benar dan menjadi amal jariyah bagi kita semua.*

**اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ**

</div>
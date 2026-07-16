# Imam Abdilla Aulia - Personal Portfolio

Sebuah website portfolio personal yang modern, responsif, dan interaktif yang dibangun menggunakan HTML5, CSS3 kustom, dan Vanilla JavaScript. Proyek ini mempresentasikan profil akademis, keahlian teknis, riwayat pendidikan, dan karya proyek unggulan dari **Imam Abdilla Aulia**, mahasiswa Sistem Informasi di **Universitas Sebelas April (UNSAP)** Sumedang.

---

## 🚀 Fitur Utama & Kriteria Penilaian Terpenuhi

### 1. Komponen Wajib (60 Poin)
*   **Header / Navigasi (15 Poin)**:
    *   Navigasi responsif (berubah menjadi menu laci/hamburger pada tampilan mobile).
    *   Logo personal berbasis SVG monograf (`assets/images/logo.svg`).
    *   *Smooth scrolling* antar section serta pelacak navigasi aktif (*ScrollSpy*).
*   **Hero Section (15 Poin)**:
    *   Foto profil profesional yang terintegrasi estetika bingkai dinamis (`assets/images/profile/imam.jpeg`).
    *   Nama lengkap dan tagline deskriptif yang menonjolkan Universitas Sebelas April.
    *   Tautan media sosial interaktif (GitHub, LinkedIn, Instagram, dan Email).
    *   Animasi mengambang (*floating UI cards*) untuk representasi IPK dan keahlian utama.
*   **About Me (15 Poin)**:
    *   Deskripsi personal mengenai minat, latar belakang, dan aspirasi karier.
    *   Tampilan keahlian (*Skills*) dengan progress bar interaktif yang terisi otomatis ketika layar di-scroll.
    *   Lini masa pendidikan (*Education Timeline*) vertikal dengan simpul interaktif.
*   **Portfolio Gallery (15 Poin)**:
    *   Layout grid responsif menampilkan minimal 6 proyek dengan efek *hover overlay*.
    *   Pratinjau gambar penuh menggunakan *Lightbox Modal* kustom (Vanilla JS).
    *   Fitur filter kategori proyek (Semua, Web App, Mobile, UI/UX) berbasis JavaScript.

### 2. Fitur JavaScript (25 Poin)
*   **Dark / Light Mode Toggle (10 Poin)**: Mode gelap (*premium default*) dan mode terang yang halus menggunakan variabel CSS kustom. Preferensi tema disimpan secara lokal melalui `localStorage`.
*   **Form Contact dengan Validasi (10 Poin)**: Form kontak dengan validasi waktu-nyata (*real-time validation*) untuk input Nama, Email, dan Pesan, lengkap dengan indikator warna keberhasilan/kegagalan serta notifikasi Toast.
*   **Loading Animation (5 Poin)**: Animasi transisi pemuatan halaman awal (*loader spinner*) sebelum konten ditampilkan sepenuhnya.

### 3. Styling & Responsiveness (15 Poin)
*   Desain modern dengan sentuhan glassmorphism, gradasi warna futuristik, dan kontras tinggi.
*   Penerapan CSS Flexbox dan CSS Grid untuk struktur layout dinamis.
*   Penggunaan *Media Queries* khusus untuk memastikan kegunaan optimal pada perangkat mobile, tablet, hingga desktop.
*   Transisi halus (*transition*) pada pergantian tema dan interaksi tombol.

### 4. Bonus Points (10 Poin)
*   **Lazy Loading**: Optimalisasi performa melalui atribut `loading="lazy"` pada gambar portofolio dan profil.
*   **Performance Optimization**: Pemisahan struktur aset, minimalisasi permintaan HTTP eksternal, dan penulisan skrip non-blocking (defer/DOM-safe).

---

## 📁 Struktur Proyek

```text
portofolio-imam/
│
├── index.html            # Halaman utama portfolio
├── README.md             # Deskripsi dan dokumentasi proyek
└── assets/
    ├── css/
    │   └── custom.css    # Stylesheet kustom utama (variabel warna, grid, animasi)
    ├── js/
    │   └── script.js     # Logika utama (theme toggle, validation, lightbox, filter)
    ├── images/
    │   ├── profile/      # Foto profil Imam Abdilla Aulia
    │   ├── projects/     # 6 Screenshot/mockup gambar proyek
    │   ├── bg/           # Gambar / dekorasi latar belakang
    │   └── logo.svg      # Logo personal monogram SVG (IAA)
    ├── icons/
    │   ├── social/       # SVG icons untuk tautan media sosial
    │   └── skills/       # SVG icons untuk representasi kemampuan teknis
    └── docs/
        └── CV_Imam_Abdilla_Aulia.pdf  # Dokumen CV pendukung
```

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

1.  **Clone atau Unduh** direktori proyek ini ke komputer Anda.
2.  Karena situs ini dibangun menggunakan standard web statis murni, Anda dapat membukanya langsung dengan mengeklik ganda file `index.html` pada browser Anda.
3.  *Opsional (Sangat Direkomendasikan)*: Jalankan server lokal untuk fungsionalitas optimal (seperti modul pembacaan aset PDF):
    *   Jika menggunakan **VS Code**, klik kanan `index.html` dan pilih **Open with Live Server**.
    *   Menggunakan terminal (Python):
        ```bash
        python -m http.server 8000
        ```
        Lalu buka browser Anda dan akses `http://localhost:8000`.

---

## ✍️ Lisensi & Kredensial

*   **Nama**: Imam Abdilla Aulia
*   **Afiliasi**: Sistem Informasi, Universitas Sebelas April Sumedang (UNSAP)
*   Kode ini ditulis secara orisinal dengan mematuhi praktik standar industri pengembangan web modern (*Clean Code* dan *Semantic HTML*).

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/H1iV6h5P)
# WebHw2
Name: Ernando Febrian
NIM : 1313624021

---

# 🎨 DoodleIn - Creative Doodle Art E-Commerce Platform

DoodleIn adalah platform e-commerce kreatif yang mengkhususkan diri dalam pembuatan produk dan penyediaan layanan dengan gaya seni doodle yang khas. Website ini dibangun menggunakan **AdonisJS v6** dengan TypeScript dan SQLite sebagai database.

## 📋 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Instalasi](#-instalasi)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Struktur Halaman](#-struktur-halaman)
- [API Endpoints](#-api-endpoints)
- [Seller Dashboard](#-seller-dashboard)
- [Database](#-database)

## ✨ Fitur Utama

### 1. **Home Page** (`/`)
- Hero section dengan penjelasan tentang doodle art
- Showcase produk dan layanan populer
- Call-to-action untuk melihat produk dan melakukan pemesanan
- Desain responsif dengan animasi interaktif

### 2. **Products & Services** (`/products`)
- Menampilkan semua produk dan layanan dalam format slider interaktif
- Slider produk dengan navigasi prev/next
- Slider layanan dengan navigasi prev/next
- Setiap item menampilkan:
  - Gambar produk/layanan
  - Nama dan deskripsi
  - Harga
  - Tombol "Add to Wishlist" dengan ikon hati
- Data dimuat secara dinamis dari database melalui API

### 3. **Search Functionality** (`/search`)
- Fitur pencarian real-time untuk produk dan layanan
- Pencarian berdasarkan nama dan deskripsi
- Hasil pencarian ditampilkan dalam grid layout
- Integrasi dengan wishlist pada setiap item hasil pencarian
- Akses melalui search icon di header

### 4. **Wishlist** (`/wishlist`)
- Menyimpan produk dan layanan favorit pengguna
- Penyimpanan data menggunakan database SQLite
- Fitur tambah/hapus item dari wishlist
- Menampilkan semua item wishlist dalam satu halaman
- Counter wishlist di header menampilkan jumlah item
- Data persisten dan tersinkronisasi

### 5. **About Page** (`/about`)
- Informasi tentang brand DoodleIn
- Moto dan visi perusahaan
- Call-to-action section untuk melihat produk dan melakukan order
- Desain dengan elemen visual balon udara animasi

### 6. **Orders Page** (`/orders`)
- Form pemesanan produk
- Daftar produk yang bisa dipesan dengan harga:
  - Doodle Decoration ($12)
  - Doodle Stickers ($7)
  - Doodle Tote Bag ($15)
- Form checkout dengan detail pelanggan
- Integrasi dengan WhatsApp untuk konfirmasi order

### 7. **Contact Page** (`/contact`)
- Informasi kontak DoodleIn
- Tombol WhatsApp untuk hubungi langsung
- Ilustrasi kontak yang menarik

### 8. **Seller Dashboard** (`/seller`) 🔒
**⚠️ Halaman ini HIDDEN - Tidak ada link di navigasi utama!**

**Akses:** Ketik manual di browser: `http://localhost:3333/seller`

**Login Credentials:**
- **Username:** `1234`
- **Password:** `1234`

**Fitur Seller Dashboard:**

#### a. **Products & Services Management**
- Menampilkan semua produk dan layanan dalam satu grid
- Setiap item menampilkan:
  - Gambar, nama, deskripsi, dan harga
  - Tag "Product" atau "Service"
  - Tombol Delete untuk menghapus item
- Konfirmasi sebelum menghapus item
- Data langsung tersinkronisasi dengan database

#### b. **Add New Item**
- Form untuk menambah produk atau layanan baru
- Field yang tersedia:
  - Item Type (Product/Service)
  - Name
  - Description
  - Price
  - Image Upload
- Upload gambar dengan preview
- Validasi form sebelum submit
- Gambar disimpan di `public/images/products/`
- Auto-generate unique filename untuk setiap gambar

#### c. **Wishlist Monitoring**
- Melihat semua item yang di-wishlist oleh pengguna
- Menampilkan nama, deskripsi, harga, dan tipe item
- Statistik jumlah item di wishlist
- Berguna untuk melihat produk/layanan yang paling diminati

#### d. **Session Management**
- Login dengan username dan password
- Session tersimpan selama browser aktif
- Logout button untuk keluar dari dashboard
- Otomatis redirect ke login jika belum login

## 🛠 Teknologi yang Digunakan

### Backend
- **AdonisJS v6** - Node.js web framework
- **TypeScript** - Programming language
- **Lucid ORM** - Database ORM
- **SQLite** - Database
- **Edge.js** - Template engine

### Frontend
- **Vanilla JavaScript** - Client-side scripting
- **CSS3** - Styling dengan custom properties
- **Vite** - Module bundler dan dev server
- **Font Awesome** - Icons (untuk wishlist, search, dll)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Hot Module Replacement (HMR)** - Live reload during development

## 📦 Instalasi

### Prerequisites
- Node.js (versi 20 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd webhw2-Nand-o
```

2. Install dependencies
```bash
npm install
```

3. Copy environment file
```bash
cp .env.example .env
```

4. Generate app key
```bash
node ace generate:key
```

5. Jalankan migrasi database
```bash
node ace migration:run
```

6. (Opsional) Jalankan seeder untuk data awal
```bash
node ace db:seed
```

## 🚀 Menjalankan Aplikasi

### Development Mode
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3333` dengan hot reload aktif.

### Menjalankan Tests
```bash
npm test
```

## 📄 Struktur Halaman

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| `/` | Home | Landing page dengan hero section |
| `/about` | About Us | Informasi tentang DoodleIn |
| `/products` | Products & Services | Katalog produk dan layanan |
| `/search?q=query` | Search Results | Hasil pencarian produk/layanan |
| `/wishlist` | Wishlist | Daftar item favorit |
| `/orders` | Orders | Form pemesanan |
| `/contact` | Contact | Informasi kontak |
| `/seller` | Seller Dashboard 🔒 | Dashboard manajemen (Hidden) |

## 🔐 Seller Dashboard

### Akses Seller Dashboard

**Halaman seller dashboard adalah halaman HIDDEN yang tidak dapat diakses melalui navigasi biasa.**

**Cara Mengakses:**
1. Buka browser
2. Ketik URL: `http://localhost:3333/seller`
3. Login dengan kredensial berikut:
   - **Username:** `1234`
   - **Password:** `1234`

### Fitur-Fitur Dashboard:

1. **Tab Products & Services**
   - Lihat semua produk dan layanan
   - Hapus item yang tidak diinginkan
   - Konfirmasi sebelum menghapus

2. **Tab Add Item**
   - Tambah produk atau layanan baru
   - Upload gambar dengan preview
   - Validasi input otomatis

3. **Tab Wishlist**
   - Monitor item yang di-wishlist user
   - Lihat tren produk/layanan populer

### Keamanan
- Session-based authentication
- Credentials di-hardcode untuk keperluan demo
- Session cleared on logout
- Auto-redirect jika belum login

## 💾 Database

### Database Schema

#### Products Table
```sql
- id: INTEGER PRIMARY KEY
- name: VARCHAR(255)
- description: TEXT
- price: DECIMAL(10,2)
- image_url: VARCHAR(500)
- created_at: DATETIME
- updated_at: DATETIME
```

#### Services Table
```sql
- id: INTEGER PRIMARY KEY
- name: VARCHAR(255)
- description: TEXT
- price: DECIMAL(10,2)
- image_url: VARCHAR(500)
- created_at: DATETIME
- updated_at: DATETIME
```

#### Wishlists Table
```sql
- id: INTEGER PRIMARY KEY
- item_id: VARCHAR(255)
- item_type: VARCHAR(50) -- 'product' or 'service'
- created_at: DATETIME
- updated_at: DATETIME
```

### Database Location
Database SQLite tersimpan di: `tmp/db.sqlite3`

### Migrasi Database
```bash
# Jalankan migrasi
node ace migration:run

# Rollback migrasi
node ace migration:rollback

# Refresh database
node ace migration:refresh

# Reset database
node ace migration:reset
```

### Seeding Data
```bash
# Jalankan semua seeder
node ace db:seed

# Jalankan seeder spesifik
node ace db:seed --files=database/seeders/product_seeder.ts
node ace db:seed --files=database/seeders/service_seeder.ts
```

## 📁 Struktur Folder

```
├── app/
│   ├── controllers/Http/      # Controllers untuk API endpoints
│   ├── models/                # Database models (Product, Service, Wishlist)
│   └── middleware/            # Middleware aplikasi
├── config/                    # Konfigurasi aplikasi
├── database/
│   ├── migrations/            # Database migrations
│   └── seeders/              # Database seeders
├── public/
│   ├── assets/               # Compiled CSS & JS
│   └── images/               # Images (products, static)
├── resources/
│   ├── css/                  # Source CSS files
│   ├── js/                   # Source JavaScript files
│   └── views/                # Edge templates
│       ├── components/       # Reusable components
│       ├── pages/            # Page templates
│       └── partials/         # Layout partials
├── start/                    # Bootstrap files
│   └── routes.ts             # Route definitions
└── tmp/                      # Temporary files (database)
```

## 🎯 Fitur Khusus

### 1. **Dynamic Product Slider**
- Auto-sliding dengan kontrol manual
- Smooth transitions
- Responsive design
- Touch-friendly untuk mobile

### 2. **Real-time Wishlist**
- Instant feedback saat add/remove
- Counter update otomatis
- Persisten menggunakan database
- Sinkronisasi antar halaman

### 3. **Image Upload System**
- Upload preview sebelum submit
- Validasi tipe dan ukuran file
- Auto-generate unique filename
- Secure file storage

### 4. **Search System**
- Case-insensitive search
- Search pada nama dan deskripsi
- Real-time results
- Highlight matching items

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server dengan HMR
npm run build        # Build untuk production
npm start            # Run production server
npm test             # Run tests
npm run lint         # Lint code
npm run format       # Format code dengan Prettier
npm run typecheck    # TypeScript type checking
```

### Environment Variables

```env
PORT=3333
HOST=localhost
NODE_ENV=development
APP_KEY=<generated-key>
LOG_LEVEL=info
DB_CONNECTION=sqlite
```

## 📝 Notes

- Database menggunakan SQLite untuk kemudahan development
- Seller dashboard credentials di-hardcode untuk demo purposes
- Image upload maximum 5MB
- Supported image formats: jpg, jpeg, png, gif, webp

## 🤝 Contributing

Proyek ini adalah tugas kuliah. Untuk kontribusi:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau issue, silakan hubungi:
- **Nama:** Ernando Febrian
- **NIM:** 1313624021

## 📜 License

UNLICENSED - Proyek ini adalah tugas kuliah dan tidak untuk distribusi komersial.

---

**⭐ Selamat Menggunakan DoodleIn! ⭐**

*Transform your product with creative doodle art.*

# PRD — Project Requirements Document
## SEKAR Hair Mask · Final Version (v3.0)
> Simple by design. Clear by intention.

---

## 1. Overview

SEKAR adalah masker rambut alami premium yang diformulasikan dari limbah canang (upacara adat Bali), diperkaya ekstrak bunga pacar air (*Impatiens balsamina*) dan aroma pandan (*Pandanus amaryllifolius*). Kaya akan flavonoid, tanin, saponin, dan glikosida — memberikan efek antioksidan, antibakteri, dan penguatan untuk rambut yang lebih sehat.

Website SEKAR dibangun dengan filosofi **"simple to look at, easy to understand"** — mengikuti pendekatan visual BINARA yang terbukti efektif: pure scroll storytelling, image-first, tanpa navbar, tanpa kekacauan informasi. Pengunjung tidak akan kebingungan karena alur cerita mengalir linear dari atas ke bawah dalam satu tarikan napas.

**Target audiens:** Dewan juri kompetisi ilmiah, konsumen peduli kesehatan, akademisi.

---

## 2. Konsep Inti: Simple Scroll Storytelling

### Filosofi Desain
- **Image First** — Foto berbicara sebelum teks
- **Linear Flow** — Satu arah, tidak ada percabangan, tidak ada kebingungan
- **No Navbar** — Tidak ada menu, tidak ada pilihan navigasi — user cukup scroll
- **Progressive Disclosure** — Informasi terungkap bertahap sesuai scroll position
- **Zero Clutter** — Setiap elemen yang ada punya tujuan, tidak ada dekorasi berlebih

### Kenapa Tidak Ada Navbar?
Navbar memberi user "pilihan" — dan pilihan menciptakan kebingungan ("harus klik yang mana dulu?"). Dengan pure scroll, user selalu tahu: **ke bawah = lanjut cerita**. Simple, intuitif, tidak perlu dipelajari.

---

## 3. Section Structure

Mengikuti struktur BINARA — 3 section utama + footer.

```
┌─────────────────────────────┐
│         HERO                │  ← Pintu masuk utama
├─────────────────────────────┤
│      OUR PRODUCT            │  ← Kenalan dengan produk
├─────────────────────────────┤
│    JOURNEY OF SEKAR         │  ← Proses & kepercayaan
├─────────────────────────────┤
│         FOOTER              │  ← Penutup bersih
└─────────────────────────────┘
```

---

## 4. Detail Per Section

---

### 🔴 HERO
**Tujuan UX:** Ciptakan kesan pertama yang kuat. Jawab pertanyaan "ini produk apa?" dalam 3 detik.

**Layout:**
- Foto produk full-bleed (foto klien: jar SEKAR + bunga + canang) sebagai `background-image`
- Gradient overlay plum `rgba(110,43,114,0.85)` dari bawah ke atas — teks tetap terbaca tanpa mengorbankan keindahan foto
- Semua teks berada di atas overlay (bukan di bawah foto seperti BINARA) → lebih sinematik

**Konten (dari atas ke bawah):**
```
SEKAR                          ← nama produk, Cormorant Garamond, besar
Hair Mask                      ← kategori produk, DM Sans
─────────────────────────────
[deskripsi singkat 2-3 kalimat]
Masker rambut alami dari limbah canang Bali,
diperkaya bunga balsam & pandan untuk rambut
lebih sehat dan kuat.
─────────────────────────────
[ DISCOVER MORE ↓ ]  [ 📄 Lab Report ]   ← 2 CTA
```

**UX Notes:**
- `DISCOVER MORE` = smooth scroll anchor ke section `#produk` — user tahu harus ke mana
- `📄 Lab Report` = download PDF langsung
- Tidak ada link lain — mengurangi decision fatigue
- Panah `↓` kecil di bawah CTA memberikan visual cue bahwa ada konten di bawah

---

### 🟢 OUR PRODUCT
**Tujuan UX:** Perlihatkan produk nyata. Bangun kepercayaan visual.

**Layout (identik BINARA):**
```
┌──────────────────────────────┐
│                              │  ← 1 foto portrait besar (hero shot produk)
│       FOTO UTAMA             │
│                              │
└──────────────────────────────┘
┌─────────┬─────────┬──────────┐
│ foto 2  │ foto 3  │  foto 4  │  ← 3 foto kecil (grid 3 kolom)
└─────────┴─────────┴──────────┘
```

**Section Label:**
```
─────  OUR PRODUCT  ─────
```
Tipografi ALL CAPS + garis tipis gold (#D4930C) — pemisah bersih antar section.

**UX Notes:**
- Foto besar = hero shot produk (close-up jar, kemasan, tekstur)
- Foto kecil = variasi angle (dari atas, detail label, konteks pemakaian)
- Hover effect: `transform: scale(1.04)` dengan `overflow: hidden` — subtle, tidak berlebihan
- Background section: `#1a0a20` (plum gelap) — foto menonjol dengan kontras tinggi

**Aset dibutuhkan:** 4 foto produk (1 portrait + 3 square/landscape)

---

### 🟣 JOURNEY OF SEKAR
**Tujuan UX:** Tunjukkan proses = bangun kepercayaan ilmiah & autentisitas.

**Layout (identik BINARA):**
```
┌───────────┬───────────┐
│  step 1   │  step 2   │  ← 2×2 grid (foto proses)
├───────────┼───────────┤
│  step 3   │  step 4   │
└───────────┴───────────┘
┌──────────────────────────────┐
│     foto wide / landscape    │  ← 1 foto lebar (produk jadi / hasil akhir)
└──────────────────────────────┘
```

**Urutan konten foto:**
1. **Pengumpulan bahan** — canang, bunga balsam segar, daun pandan
2. **Proses ekstraksi** — pengolahan bahan di lab/dapur produksi
3. **Formulasi** — proses mixing, tekstur masker terbentuk
4. **Pengemasan** — jar dikemas, label ditempel
5. **Produk jadi** — foto landscape lebar (bisa pakai foto hero yang sama)

**Section Label:**
```
─────  JOURNEY OF SEKAR  ─────
```

**UX Notes:**
- Urutan foto = urutan proses → user secara alami membaca kiri-ke-kanan, atas-ke-bawah
- Tidak ada teks caption per foto — visual cukup bercerita
- Foto wide di bawah = penutup visual yang kuat sebelum footer
- Background section: `#2a1230` (plum lebih terang dari above)

**Fallback (jika klien tidak punya foto proses):**
Ganti 4 foto grid dengan **4 kartu langkah** (icon Lucide + 1 baris teks): Kumpul → Ekstrak → Formulasi → Kemas. Tetap clean, tetap bercerita.

---

### ⚫ FOOTER
**Tujuan UX:** Penutup bersih — user tahu halaman sudah selesai.

**Layout:**
```
─────────────────────────────────────────
© 2025 SEKAR. All rights reserved.
─────────────────────────────────────────
```

Satu baris, teks centered, background plum gelap (#6E2B72). Tidak ada link, tidak ada sosmed, tidak ada navigasi.

---

## 5. User Flow

```
Buka URL
    │
    ▼
[HERO] — Lihat foto produk Bali yang memukau
    │     Baca nama + deskripsi singkat SEKAR
    │     Klik "📄 Lab Report" → download PDF (opsional)
    │     Klik "DISCOVER MORE" atau scroll sendiri ↓
    │
    ▼
[OUR PRODUCT] — Lihat foto produk dari berbagai angle
    │            "Oh, ini bentuk produknya..."
    │            Scroll terus ↓
    │
    ▼
[JOURNEY OF SEKAR] — Lihat proses pembuatan step by step
    │                 "Oh, dibuat dengan serius & ilmiah..."
    │                 Kepercayaan terbangun
    │                 Scroll terus ↓
    │
    ▼
[FOOTER] — Halaman selesai. Kesan tersisa: premium + authentic
```

**Tidak ada dead end.** Tidak ada tombol "back", tidak ada link yang membawa keluar halaman (kecuali PDF). User selalu tahu posisinya: scroll ke bawah = lanjut, sudah sampai footer = selesai.

---

## 6. UX Principles: Kenapa Tidak Membingungkan?

| Potensi Kebingungan | Solusi di SEKAR |
|---|---|
| "Harus mulai dari mana?" | Tidak ada pilihan — langsung hero, langsung jelas |
| "Ini produk apa?" | Dijawab di hero dalam 3 detik (foto + nama + deskripsi) |
| "Apakah ada konten lagi?" | Panah `↓` di hero + visual continuity antar section |
| "Produknya terpercaya?" | Journey section buktikan proses nyata + PDF lab report |
| "Sudah selesai atau belum?" | Footer sederhana = sinyal jelas halaman berakhir |
| "Harus klik apa?" | Hanya 2 CTA di hero — tidak ada overload pilihan |

---

## 7. Design System

### Warna
| Token | Hex | Penggunaan |
|---|---|---|
| Plum | `#6E2B72` | Background hero overlay, footer |
| Plum Dark | `#1a0a20` | Background "Our Product" |
| Plum Mid | `#2a1230` | Background "Journey" |
| Gold | `#D4930C` | Section divider line, CTA button |
| Rose | `#C97BA8` | CTA sekunder, aksen teks |
| Cream | `#FAF3E0` | Teks utama di atas background gelap |

### Tipografi
| Peran | Font | Style |
|---|---|---|
| Nama produk (SEKAR) | Cormorant Garamond | Italic, 72–96px |
| Sub-heading | Cormorant Garamond | Regular, 24–36px |
| Body text | DM Sans | Regular 400, 16px |
| Section label | DM Sans | 500, 11px, ALL CAPS, letter-spacing .15em |
| CTA button | DM Sans | 500, 13px |

### Section Divider
```html
<!-- Pemisah section — tipis, konsisten, elegant -->
<div class="section-divider">
  <span>OUR PRODUCT</span>
</div>

/* CSS */
.section-divider {
  padding: 10px 24px;
  border-top: 1px solid rgba(212, 147, 12, 0.5);
  border-bottom: 1px solid rgba(212, 147, 12, 0.5);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .15em;
  color: #C97BA8;
  text-align: center;
}
```

---

## 8. Tech Stack

| Layer | Teknologi | Catatan |
|---|---|---|
| Build Tool | **Vite** | Fast dev + optimasi aset |
| Styling | **Tailwind CSS v4** | `@theme` di CSS, no config.js |
| Logic | **Vanilla JS ES6** | Minimal — hanya hover & smooth scroll |
| Animasi | **AOS** | `fade-up`, `once: true`, `duration: 800` |
| Font | **Google Fonts** | Cormorant Garamond + DM Sans |
| Icons | **Lucide** | Hanya untuk fallback Journey cards |
| Hosting | **Vercel** | Auto-deploy dari GitHub |

**Tidak ada:** router, state management, database, API call, framework JS, template UI.

---

## 9. Struktur File

```
sekar-web/
├── public/
│   └── assets/
│       └── sekar-lab-report.pdf
├── src/
│   ├── style.css          ← Tailwind v4 @theme + base styles
│   └── main.js            ← AOS init + smooth scroll
├── index.html             ← Satu-satunya HTML file
├── vite.config.js
└── package.json
```

Tidak ada `src/data/content.js` — konten langsung hardcode di `index.html`. Simple project = simple structure.

---

## 10. Aset yang Dibutuhkan dari Klien

| # | Aset | Status | Keterangan |
|---|---|---|---|
| 1 | Foto hero | ✅ Sudah ada | Foto jar SEKAR + bunga + canang + taman Bali |
| 2 | Foto produk (3 buah) | ❓ Belum | Untuk grid "Our Product" |
| 3 | Foto proses (4 buah) | ❓ Belum | Untuk grid "Journey of SEKAR" |
| 4 | Foto wide/landscape | ❓ Belum | Untuk baris bawah Journey (bisa pakai foto hero) |
| 5 | File PDF uji lab | ❓ Belum | Untuk tombol download di hero |

**Jika foto proses tidak tersedia:** Section Journey otomatis beralih ke layout 4 kartu langkah (icon + teks). Website tetap bisa di-deploy.

---

## 11. Success Criteria

- [ ] Load time < 2 detik
- [ ] Responsive di mobile, tablet, desktop
- [ ] Foto hero tampil full-bleed tanpa distorsi
- [ ] PDF dapat diunduh dari tombol hero
- [ ] Smooth scroll antar section (0.8s ease)
- [ ] Hover scale pada foto gallery berjalan smooth
- [ ] Footer tampil bersih sebagai penutup visual
- [ ] Live di Vercel sebelum deadline

---

## 12. Development Priority (Deadline Besok)

```
Priority 1 — Selesai malam ini:
  ✦ Setup Vite + Tailwind v4
  ✦ index.html skeleton (semua section)
  ✦ Hero section dengan foto yang sudah ada
  ✦ Deploy awal ke Vercel

Priority 2 — Selesai besok pagi:
  ✦ Our Product section (placeholder jika foto belum ada)
  ✦ Journey section (placeholder atau icon fallback)
  ✦ AOS animations
  ✦ Mobile responsive check

Priority 3 — Setelah foto dari klien masuk:
  ✦ Ganti semua placeholder dengan foto asli
  ✦ Final polish + PDF link
  ✦ Submit ke klien
```

---

*PRD Final — SEKAR v3.0 · Maret 2026*
*Simple to look at. Easy to understand. Built to impress.*

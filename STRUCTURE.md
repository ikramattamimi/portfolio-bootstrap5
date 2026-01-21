# Portfolio Website - Modular Structure

## 📁 Struktur File

Portfolio ini sekarang menggunakan struktur modular dimana setiap section dipisahkan ke file yang berbeda untuk kemudahan maintenance dan pengembangan.

### File Utama
- `index.html` - File HTML utama dengan struktur dasar dan placeholders
- `sections-loader.js` - JavaScript untuk load semua section secara dinamis
- `index-backup.html` - Backup dari index.html versi lama (monolithic)
- `script-old.js` - Backup dari script.js versi lama

### Folder Sections
Folder `sections/` berisi semua section yang dipisahkan:

1. **header.html** - Hero section dengan intro dan CTA buttons
2. **experience.html** - Professional experience timeline
3. **projects.html** - Portfolio projects dengan 4 modals (Trashclean, Salary Payment, Accounting App, College Final Project)
4. **techstack.html** - Technology stack yang dikuasai
5. **cv.html** - CV download section
6. **contact.html** - Contact information dan social media links
7. **footer.html** - Footer dan floating CV button

## 🚀 Cara Kerja

1. **Lazy Loading**: Setiap section di-load secara asynchronous saat halaman dibuka
2. **Modular**: Mudah untuk edit section tertentu tanpa menyentuh file lain
3. **Maintainable**: Kode lebih terorganisir dan mudah di-maintain

## 🛠️ Cara Mengedit

### Mengedit Section Tertentu
Cukup buka file yang sesuai di folder `sections/`:
```
sections/
  ├── header.html       → Edit intro/hero section
  ├── experience.html   → Edit work experience
  ├── projects.html     → Edit projects dan modals
  ├── techstack.html    → Edit technology stack
  ├── cv.html          → Edit CV section
  ├── contact.html     → Edit contact info
  └── footer.html      → Edit footer
```

### Menambah Section Baru
1. Buat file baru di folder `sections/`, misalnya `testimonials.html`
2. Tambahkan placeholder di `index.html`:
   ```html
   <div id="testimonials-section"></div>
   ```
3. Tambahkan konfigurasi di `sections-loader.js`:
   ```javascript
   { id: 'testimonials-section', file: 'sections/testimonials.html' }
   ```

### Mengedit Navbar
Navbar tetap berada di `index.html` karena perlu visible sebelum content lainnya di-load.

## 📝 Catatan Penting

### Running Locally
Karena menggunakan fetch API untuk load sections, website ini harus dijalankan melalui web server, bukan dibuka langsung via file://

**Cara 1: Menggunakan Python**
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

**Cara 2: Menggunakan PHP**
```bash
php -S localhost:8000
# Buka http://localhost:8000
```

**Cara 3: Menggunakan VS Code Live Server Extension**
- Install extension "Live Server"
- Right click pada index.html → "Open with Live Server"

### Deployment
Untuk production, semua file bisa di-deploy apa adanya. Web server modern (Apache, Nginx) akan handle fetch requests dengan baik.

## 🔧 Troubleshooting

**Problem**: Section tidak muncul/kosong
- **Solution**: Pastikan menjalankan via web server, bukan file://

**Problem**: Swiper tidak berfungsi
- **Solution**: Swiper di-initialize setelah sections loaded. Cek console untuk error.

**Problem**: Navigation tidak aktif
- **Solution**: Pastikan section ID di HTML match dengan href di navbar.

## 📚 Dependencies

- Bootstrap 5.3.2
- Swiper 10
- Boxicons 2.1.4
- Font Awesome 6.4.2
- Devicon 2.15.1

## 🎨 Customization

### Mengganti Warna
Edit CSS variables di `styles/style.css`:
```css
:root {
    --primary-color: #ff0000;  /* Warna merah */
    --bg-purple: #181624;       /* Background purple */
    /* ... */
}
```

### Mengganti Font
Edit di bagian atas `styles/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

## 📄 License

Copyright © 2026 Ikram Muhammad Bukhori Attamimi. All Rights Reserved.

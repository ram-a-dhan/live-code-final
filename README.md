# Covid19 - Livecode 2 Phase 2

​"KEMBALI SETELAH B R E A K"

## Specs

Terdapat sebuah aplikasi yang dapat melihat jumlah kasus penyebaran virus yang terdapat pada negara di dunia, dan juga authenticated user dapat melaporkan kasus pada negara yang terdaftar.
​
Buatlah sebuah web app dengan fitur sebagai berikut:
​ - User Login **10**

- Show Countries **10**
- Show My Reports **10** (Menampilkan reports yang dilaporkan user yang sedang login)
- Add Reports **10** (Menambahkan reports yang dilaporkan user yang sedang login ke satu negara)
- Delete Reports **10** (Menghapus reports yang dilaporkan user yang sedang login ke satu negara)
  ​
  Kompetensi yang akan dinilai (diluar fitur):
  ​
- Error handling, dan Notifikasi di client ketika berhasil / gagal melakukan action pts: **10**
- Reusable components/functions (DRY, Don't repeat yourself!), pts: **15**
- Mengimplementasikan state management di client, pts: **15**
- Membuat user interface yang baik, pts: **10**
  ​
  Untuk membuat server, silakan mengacu pada file `api-doc.md`
  Nama database wajib : p2_final_lc
  Wajib menyertakan .env yang digunakan
  ​

## Here be dragons...

​
Jika kamu sudah menyelesaikan semua fitur dan sudah menerapkan kompetensi yang
diperlukan, kamu boleh mengerjakan fitur tambahan ini pada halaman list Covid19:
​

- Search filter countries wajib menggunakan debounce (boleh buatan atau pake lodash)
- menggunakan transaction (SQL) pada saat report cases dan delete cases

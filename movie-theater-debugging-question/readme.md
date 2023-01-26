# DPP / Debugging dan Pair Programming

## `Debugging ~ 10 minute` 
Disini jika teman - teman mengakses perintah yang disediakan oleh app.js :
- `node app.js help`
- `node app.js theaterList`
- `node app.js customerList`
- `node app.js checkSeat 1`
- `node app.js ticketInfo 1`
- `node app.js ticketInfo 2`

Developer diminta untuk mencari dan memberikan solusi pada bug yang ditemukan agar program bisa berjalan sesuai dengan semestinya.
Berikan comment pada bug yang diperbaiki.

**NOTE**
1. **Tidak perlu melakukan perubahan logic.**
2. **Cek alur code berjalan secara satu per satu.**
3. **Baca pesan error yang muncul**

## `Pair Programming ~ 10 minute`
Developer diminta untuk menambahkan fitur pada perintah ticketInfo.
Pada umumnya jika perintah ticket info dijalankan, maka akan menampilkan pesan dengan format sebagai berikut.

```js
"This Premiere ticket are booked for Patra to watch Avatar The Legend of Callback with seat number A-4"
```

Terapkan karakteristik OOP, agar tampilan ticket info pada jenis ticket Premiere menjadi seperti contoh dibawah ini.

```js
"This Premiere ticket are booked for Patra to watch Avatar The Legend of Callback with seat number 'classified'
```


**NOTE**
1. **Tidak boleh merubah data yang dibaca / disimpan.**
2. **Terapkan karakteristik OOP**
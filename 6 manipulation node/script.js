// DOM MANIPULATION
// INTI DARI INI ADALAH KITA BISA MEMBUAT, MENGUBAH DAN JUGA MENGHAPUS ELEMENT YANG SUDAH ADA DI DALAM HTML

// Saat membuat elemen HTML baru menggunakan JavaScript murni (DOM standar), ada alur 3 langkah yang selalu kita lalui:

// 1. **Buat Wadah Elemen:** `document.createElement('namaTag')`
// 2. **Buat Konten Teksnya:** `document.createTextNode('Isi teks...')`
// 3. **Rakit & Pasang:**
//     - Masukkan teks ke dalam elemen: `elemenBaru.appendChild(teksBaru)`
//     - Pasang elemen ke dalam pohon DOM: `parent.appendChild(elemenBaru)`


// 1. document.createElement
const pBaru = document.createElement('p'); // dua hal ini masih ada di memori java

// 2. membuat konten untuk teks yang sudah dibuat 
const teksPBaru = document.createTextNode('paragraf baru'); // dua hal ini masih ada di  memori java

// 3. merakit dan memasangkan elemen ke dalam pohon DOM
pBaru.appendChild(teksPBaru);

// di sini kita sudah merakitnya, sekarang kita tinggal memasangnya ke dalam pohon DOM
// menyimpan teks baru di akhir  section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// B node.insert before
const liBaru = document.createElement('li');
const teksLibaru = document.createTextNode('item baru');
liBaru.appendChild(teksLibaru);

const ul = document.querySelector('section#b ul');
// selector berjalan dengan kita memilih section dengan id b lalu mencari ul didalamnya
const li2 = ul.querySelector('li:nth-child(2)');
// lalu dari situ kita bisa memasukan const ul untuk menjadi querySelector kita

ul.insertBefore(liBaru, li2);


// C. parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// D. replace child()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('ngantuk');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);





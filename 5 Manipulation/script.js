// manipulation

// 1. mengubah konten dalam html
document.getElementById('judul');
// judul merepresntasikan id yang dipilih tetapi kita harus mendapatkan nilai yang ada di dalamnya agar bisa diubah
judul.innerHTML = 'Hello World';

// 2. Menimpa seluruh elemen anak
const sectionA = document.querySelector('section#a');
// const sectionA merupakan variabel
// sedanngka ('section#a) untuk memilih element
sectionA.style.backgroundColor = 'lightgray';

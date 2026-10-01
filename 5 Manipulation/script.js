// // manipulation

// // 1. mengubah konten dalam html
// document.getElementById('judul');
// // judul merepresntasikan id yang dipilih tetapi kita harus mendapatkan nilai yang ada di dalamnya agar bisa diubah
// judul.innerHTML = 'Hello World';

// // 2. Menimpa seluruh elemen anak
// const sectionA = document.querySelector('section#a');
// // const sectionA merupakan variabel
// // sedanngka ('section#a) untuk memilih element
// sectionA.style.backgroundColor = 'lightgray';

// //querySelector harus menggunkan pagar jika id untuk membedakan dengan tag
// const judul = document.querySelector('#judul');
// judul.style.color = 'red';

// 3. mengganti attribute
// h1 merupakan id, [0] merupakan index h1 karena ada 2 h1
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'air');

// const a = document.querySelector('a');
// a.setAttribute('href', 'http://instagram.com/sandhikagalih');

// // mengetahui isi aattribute
// a.getAttribute('href');

// // menghapus atribut dari elemen html secara permanen
// const a = document.querySelector('a');
// a.removeAttribute('href');

// 4. Manipulasi class dengan classList

// a. Menambahkan class pada elemen html
// // kita akan menambahkan class pada elemen html
// const p2 = document.querySelector('.p2');
// p2.classList.add('air');

// // b.Menghapus class pada elemen html
// // kita akan menghapus class pada elemen html
// const p2 = document.querySelector('.p2');
// p2.classList.remove('air');

// // c. Mengganti class pada elemen html dengan toogle
// // kita akan mengganti class pada elemen html dengan toogle
// // jika belum ada maka toogle akan membuat class pada elemen
// // jika sudah ada maka toogle akan menghapus class pada elemen
// const p2 = document.querySelector('.p2');
// p2.classList.toggle('air');

// d. Mengecek class pada elemen html (index-of)
// kita akan mengecek class pada elemen html
// console.log(p2.classList.item(2));

// e. `classList.contains('namaClass')`
// kita akan mengecek apakah elemen html memiliki class tertentu
// console.log(p2.classList.contains('air'));

// f. `classList.replace('namaClasslama', 'namaClassbaru')`
// kita akan mengganti class pada elemen html
const p2 = document.querySelector('.p2');
p2.classList.replace('air', 'maman');
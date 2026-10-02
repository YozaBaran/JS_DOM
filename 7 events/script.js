// //EVENT HANDLER

// // 1.On Click
// const p3 = document.querySelector('.p3');
// // memanggil function ubah warna dan disambungkan langsung di html pada class p3

// function ubahWarna (){
//     p2.style.backgroundColor = 'lightblue';
// }

// // cara yang lebih baik
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

// // 2. menggunakan method addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul'); // mengambil parent terlebih dahulu untuk melakukan manipulasi elemen
//     const liBaru = document.createElement('li'); // membuat elemen baru
//     const teksLiBaru = document.createTextNode('item baru'); // membuat teks baru
//     liBaru.appendChild(teksLiBaru); // menggabungkan teks baru dengan elemen baru
//     ul.appendChild(liBaru); // menggabungkan elemen baru dengan parent
// });


// perbedaan addEventListener dan onclick
// contoh mengubah bgcolor (ketika pertama kali mengklik tidak akan terjadi apa-apa)
const p3 = document.querySelector('.p3'); // pertama kita mengambil p3 dan dimasukan ke const p3
// p3.onclick = function () { // stelah itu kita membuat function dimana ketika kita mengklik p3
//     p3.style.backgroundColor = 'blue'; // maka p3 akan berukbah bgcolornya menjadi merah
// }

// p3.onclick = function () { // stelah itu kita membuat function dimana ketika kita mengklik p3
//     p3.style.color = 'red'; // maka teks p3 akan berukubah warnya menjadi merah
// }
// // dari kedua function ini ketika pertama kali mengklik tidak akan terjadi apa-apa karena onclick yang pertama akan di timpa oleh onclick yang kedua, padahal kita ingin kedua-duanya terjadi

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'blue';
});

p3.addEventListener('click', function () {
    p3.style.color = 'red'; // 
})
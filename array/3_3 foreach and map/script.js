// 6. Foreach and map
// var angka = [1, 4, 3, 2, 5, 6, 8, 7, 9];
var nama = ["Alvin", "Rizky", "Kurniawan"];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function (e) {
//     console.log(e);
// });

// nama.forEach(function (e, i) {  //   e adalah elemennya, i adalah indexnya
//     console.log("nama saya " + e + " dengan index ke " + i);
// });


// 7. map
// map adalah metode yang digunakan untuk mengubah sebuah array menjadi array lain
// map mengembalikan array baru, bedanya dengan foreach adalah foreach tidak mengembalikan array baru

// var angka2 = angka.map(function (e) {
//     return e * 2;
// });

// console.log(angka2.join("| "));

// 8. sort
// sort mengurutkan elemen array berdasarkan abjad atau angka

var angka = [1, 4, 3, 2, 5, 11, 20, 6, 8, 7, 9];
angka.sort(function (a, b) {
    return a - b; // jika negative maka a akan ditaruh sebelum b
    // jika positive maka b akan ditaruh sebelum a
});
console.log(angka.join(" "));
// slice and splice

var arr = ["apel", "mangga", "pisang", "mangga", "pisang"]

// 4. Splice
// splice (indexAwal, jumlahData yang ingin dihapus, "elemen baru 1", "elemen baru 2", ...)
// arr.splice(2, 0, "nangka");
// console.log(arr.join(" "))

// arr.splice(2, 2, "anggur hijau", "anggur merah");
// console.log(arr.join(" ,"));

// 5.Slice
//slice(indexAwal, indexAkhir) //index awal akan terbawa dan index akhir tidak akan terbawa
var arr2 = arr.slice(1, 4);
console.log(arr.join(" "));
console.log(arr2.join(" "));
// slice memotong array tanpa mengubah array aslinya
// splice memotong array dan mengubah array aslinya

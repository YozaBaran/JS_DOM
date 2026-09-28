// find bisa mengembalikan 1 nilai
// filter mengembalikan lebih dari 1 nilai / mengembalikan array


var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var angka2 = angka.filter(function (e) {
    return e > 5;
});
console.log(angka2);

var angka3 = angka.find(function (e) {
    return e > 5;
});
console.log(angka3);
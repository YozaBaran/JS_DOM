// Manipulasi Array

//1. menambah isi array
// var arr = ["apel", "mangga", "pisang"]
// console.log(arr[1]);

// selain itu juga bisa dilakukan seperti ini
// arr[0] = "semangka"
// arr[1] = "jeruk"
// arr[2] = "melon"
// arr[3] = "pisang"
// console.log(arr);


// 2. Menghapus isi array
// var arr = ["apel", "mangga", "pisang"]
// arr[1] = undefined
// console.log(arr);


//  cara diatas bisa disebut cara manual

// 3. Menampilkan isi Array
// kitga mmebutuhkan looping
// var arr = ["apel", "mangga", "pisang", "anggur", "semangka"]

// for (var i = 0; i < arr.length; i++) { // method arr.length dipakai untuk menghitung panjang array 
//     console.log("buah yang saya suka adalah", arr[i], 'dan total buah ada', + i);
// }


//  cara diatas bisa disebut cara manual

// method pada array

var arr = ["apel", "mangga", "pisang"];

// 1. Join
// console.log(arr.join(" ")); // mengganti tanda koma dengan tanda spasi

// 2. Push & pop
arr.push("Semangka"); // push untuk menambahkan elemen di akhir array
// console.log(arr.join(" "));

arr.pop(); // pop untuk menghapus elemen terakhir array
console.log(arr.join(" "));

// 3. unshift & shift
arr.unshift("mangga") // unshift untuk menambahkan elemen di awal array
console.log(arr.join(" "))

arr.shift("mangga") // shift untuk menghapus elemen pertama array
console.log(arr.join(" "))

//berbeda engan push dan pop, shift dan unshift benar benar menghilangkan elemennya bukan sekedar membuatnya menjadi undifined
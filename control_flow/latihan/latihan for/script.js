// let n = 5;

// for (var i = 1; i <= n; i++) { // batas tinggi nya adalah 5
//     let s = ""; // let s adalah sebuah tempat untuk menyimpan nilai nya, dalam kasus ini adalah spasi

//     for (var j = 1; j <= n - i; j++) { // j dimulai dari 1 dan dia bakalan berhenti ketika j sudah mencapai n-1, jadi dia akan berhenti di angka 4
//         s += " ";
//     }

//     for (var k = 1; k <= i; k++) {
//         s += "*";
//     }
//     console.log(s);
// }


let n = 5;

for (var i = 1; i <= n; i++) {
    let s = "";
    for (var j = 1; j <= n - i; j++) {
        s += " ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        s += "*"
    }
    console.log(s);
}
// PIRAMIDA BAWAH (Hitung mundur dari 4 ke 1)
for (var i = n - 1; i >= 1; i--) {
    let s = "";

    // 1. Loop Spasi (sama persis rumusnya)
    for (var j = 1; j <= n - i; j++) {
        s += " ";
    }

    // 2. Loop Bintang (sama persis rumusnya)
    for (var k = 1; k <= 2 * i - 1; k++) {
        s += "*";
    }

    console.log(s);
}
// // menulis input terlebih dahulu

// var nilaiA = parseInt(prompt('masukan nilai a '));
// var nilaiB = parseInt(prompt('masukan nilai b '));
// var nilaiC = parseInt(prompt('masukan nilai c '));
// var nilaiD = parseInt(prompt('masukan nilai d '));
// function tambah() {
//     var inputA = nilaiA;
//     var inputB = nilaiB;
//     return inputA + inputB;
// }

// function tambah2() {
//     var inputC = nilaiC;
//     var inputD = nilaiD;
//     return inputC + inputD;
// }

// function kali() {
//     var inputA = nilaiA;
//     var inputB = nilaiB;
//     var inputC = nilaiC;
//     var inputD = nilaiD;
//     return inputA * inputB * inputC * inputD;
// }

// var hasil = kali(tambah(), tambah2());

// alert('hasilnya adalah: ' + hasil);


// 1. INPUT (Ambil bahan mentah dari user)
// var nilaiA = parseInt(prompt('masukan nilai a '));
// var nilaiB = parseInt(prompt('masukan nilai b '));
// var nilaiC = parseInt(prompt('masukan nilai c '));
// var nilaiD = parseInt(prompt('masukan nilai d '));
// var nilaiE = parseInt(prompt('masukan nilai e '));
// var nilaiF = parseInt(prompt('masukan nilai f '));

// // 2. FUNGSI DENGAN PARAMETER (Cukup 1 fungsi tambah dan 1 fungsi kali)
// function tambah(a, b) {
//     return a + b;
// }

// function kali(x, y, z) {
//     return x * y * z;
// }

// // 3. PROSES MENGHUBUNGKAN (Modularitas & Komposisi)
// // tambah(nilaiA, nilaiB) menghasilkan satu angka
// // tambah(nilaiC, nilaiD) menghasilkan satu angka
// // Kedua hasil itu jadi bahan baku (argumen) untuk fungsi kali()
// var hasil = kali(tambah(nilaiA, nilaiB), tambah(nilaiC, nilaiD), tambah(nilaiE, nilaiF));

// // 4. OUTPUT
// alert('hasilnya adalah: ' + hasil);


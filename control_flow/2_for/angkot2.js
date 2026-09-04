// pada case angkot kali ini, tugasnya adalah membuat program dimana angkot 1-6 beroperasi, dan 7-10 tidak beroperasi
// untuk angkot yang berjalan menggunakan while, dan for untuk yang tidak berjalan, da tambahkan var angkotBeroperasi 

var jmlAngkot = 20;
var angkotBeroperasi = 12;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) { // Penulisan increment diletakan pada baris baru
    console.log('Angkot no. ', + noAngkot, 'beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) { //penulisan seperti ini lebih baik, karena
    //  dengan begitu tidak peduli berapa jumlah angkot yang beroperasi maka akan secara otomatis dapat ditangani
    // (noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) { (Berbeda dengan while penulisan decrement atau increment pada for diletakan pada satu baris)
    console.log('Angkot no. ', +  noAngkot, 'sedang tidak beroperasi');
}

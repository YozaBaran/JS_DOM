var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (angkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log("Angkot no.", + noAngkot, "sedang  beroperasi"); // ketika sudah selesai operasi maka akan masuk ke statement else
    }
    else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot no. ", + noAngkot, "lembur");
    }
    else {
        console.log("Angkot no. ", + noAngkot, "sedang tidak beroperasi");
    }
}
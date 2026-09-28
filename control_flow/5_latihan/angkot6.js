// angkot 5, 8 dan 10 sedang lembur

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (angkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 6 && noAngkot !== 5) { // tanda && berguna untuk menandakan bahwa kedua kondisi harus bernilai benar (true) sedangkan !== bermakna tidak sama dengan
        // jadi bagian diatas dilogikakan sebagai "selama noAngkot kurang dari sama dengan 6 DAN tidak sama dengan 5, maka akan masuk ke statement tersebut"
        // karena jika kondisi noAngkot !== 5 bernilai benar (true) maka akan lanjut ke statement tersebut (true), begitu juga dengan kondisi noAngkot <= 6 
        // jika bernilai benar maka akan lanjut ke statement tersebut (true)
        // karena && menuntut dua nilai bernilai true
        console.log("Angkot no.", + noAngkot, "sedang  beroperasi"); // ketika sudah selesai operasi maka akan masuk ke statement else
    }
    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) { // tanda or || berguna untuk menandakan bahwa angkot 8 dan 10 sedang lembur 
        // Berbeda dengan and (&&) or (||) akan berjalan meskipun salah satu kondisi bernilai benar (true)
        // intinya, jika kondisi (noAngkot === 8) bernilai benar maka akan masuk ke statement tersebut, begitu juga dengan kondisi (noAngkot === 10) 
        // jika salah satunya saja sudah bernilai benar maka akan masuk ke statement tersebut, tidak harus keduanya
        // setelah kita menambahkan 5 pada bagian sebelumnya maka statement ini akan berjalan untuk noAngkot 5 juga
        console.log("Angkot no. ", + noAngkot, "lembur");
    }
    else {
        console.log("Angkot no. ", + noAngkot, "sedang tidak beroperasi");
    }

}
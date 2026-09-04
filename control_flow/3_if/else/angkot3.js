// menggunakan 1 for dan sisanya if/else
var jmlAngkot = 20;
var angkotBeroperasi = 12;
var noAngkot = 1;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) { // noAngkot <= jmlAngkot; (bagian ini adalah menelusuri semua angkot )
    if (noAngkot <= 12) { //disini dimulai pengkondisian, in this case statement bermaksud, jika angkot dibawah sama dengan 12
        console.log('Angkot no.', + noAngkot, 'sedang beroperasi');//  maka akan mencetak teks ini
    }
    else { // sedangkan pada statement ini berarti, jika tidak masuk pada kondisi if maka akan mencetak teks ini
        console.log('Angkot no.', + noAngkot, 'sedang tidak beroperasi'); // dan begitu sebaliknya, jika tidak masuk pada kondisi if maka akan masuk pada statement else
    }
}
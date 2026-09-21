var penumpangAngkot = [];
// 1. Jika seluruh angkot kosong melompong (if)
var tambahPenumpang = function (namaPenumpang, penumpangAngkot) {
    if (penumpangAngkot.length == 0) {
        penumpangAngkot.push(namaPenumpang)
        console.log("Penumpang baru " + namaPenumpang + " masuk ke dalam angkot!")
        return penumpangAngkot;
    }
    // 2. Jika angkot sudah ada isinya (else)                   
    else {
        // 2.a. Telusuri seluruh kursi dari awal (for)
        for (var i = 0; i < penumpangAngkot.length; i++) {
            // mencari kursi kosong
            if (penumpangAngkot[i] == undefined) {
                penumpangAngkot[i] = namaPenumpang;
                console.log("penumpang baru " + namaPenumpang + " masuk ke dalam angkot!");
                return penumpangAngkot;
            }
            // 2.b. Cek apakah nama penumpang sudah ada di dalam angkot ()
            else if (penumpangAngkot[i] == namaPenumpang) {
                console.log(namaPenumpang + " sudah ada di dalam angkot!")
                return penumpangAngkot;
            }
            // 2.c. Jika sudah memeriksa sampai kursi terakhir dan tidak ada yang kosong (else)
            else if (i == penumpangAngkot.length - 1) {
                penumpangAngkot.push(namaPenumpang);
                console.log("Penumpang baru " + namaPenumpang + " masuk ke dalam angkot!")
                return penumpangAngkot;
            }
        }
    }
}
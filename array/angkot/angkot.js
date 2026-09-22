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
                console.log("penumpang baru " + namaPenumpang + " masuk ke dalam angkot!")
                return penumpangAngkot;
            }
        }
    }
}


// Program hapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpangAngkot) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // menampilkan angkot kosong
        console.log("angkot masih kosong")
        // return 
        return penumpang;
    }

    else {
        for (var i = 0; i < penumpangAngkot.length; i++) {
            // Jika nama penumpang sesuai dengan yang dicari
            if (penumpangAngkot[i] == namaPenumpang) {
                penumpangAngkot = undefined;
                console.log("penumpang " + namaPenumpang + " turun");
                return penumpangAngkot;
            }
            console.log("penumpang" + namaPenumpang + " tidak ada di dalam angkot!");
            return penumpangAngkot;
        }
    }

}

// program untuk menghapus penumpang
    // Jika angkot kosong
      // tampilkan pesan angkot kosong
      // return 
// else
    // telusuri kursi untuk penumpang yang sama
        // jika pesan ada penumpang yang dicari
        // hapus penumpang jadi undifined
        //return
    // jika tidak ada penumpang yang dicari
    
var penumpang = ["alvin", "rizky", "icikiwie"];
if (penumpang.length == 0) {
    console.log("angkotnya masih kosong bang");

}
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // 1. Jika seluruh angkot kosong melompong
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    }
    // 2. Jika angkot sudah ada isinya
    else {
        // Telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {

            // Aturan A: Cari kursi kosong di tengah/awal
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }

            // Aturan B: Cek apakah nama penumpang sudah ada di dalam angkot
            else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                return penumpang;
            }

            // Aturan C: Jika sudah memeriksa sampai kursi terakhir dan tidak ada yang kosong
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }

        } // ✅ Kurung kurawal FOR baru ditutup di sini!
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {

    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong dan tidak mungkin penumpang turun
        console.log("angkotnya masih kosong bang");

        // kembalikan isi array
        return penumpang;
    }
    //else
    else {
        // Telusuri seluruh kursi dari awal sampai akhir
        for (var j = 0; j < penumpang.length; j++) {

            // Jika nama penumpang sesuai dengan yang dicari
            if (penumpang[j] == namaPenumpang) {
                // Hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[j] = undefined;
                return penumpang; // Langsung keluar dari fungsi
            }
        }

        // 3. Pesan ini DITARUH DI LUAR PERULANGAN FOR.
        // Artinya: Baris ini HANYA akan dieksekusi JIKA perulangan di atas 
        // sudah selesai memeriksa seluruh kursi dari awal sampai akhir 
        // dan ternyata nama yang dicari tidak ditemukan sama sekali.
        console.log("penumpang tidak ada di dalam angkot");
        return penumpang;
    }
};
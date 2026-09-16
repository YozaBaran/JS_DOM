var penumpang = ['Alvin', undefined, 'arancar'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length === 0) {
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function
        return penumpang; // return dilakukan dan kita keluar dari function, jadi code dibawahnya tidak akan dieksekusi
    }

    //else
    else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang di kursi kosong
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika sampai akhir tidak ada kursi kosong
            //tampilkan pesan "Maaf, angkot sudah penuh"
            //kembalikan isi array & keluar dari function
            //jika serluruh kursi terisi
        }
    }
}
// menangkap pilihan player
var p = prompt('pilih: batu, gunting, kertas');


// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random(); // menampilkan angka random dari 0 - 1 (just check it with console.log dawg)

if (comp < 0.33) {
    comp = 'batu';
} else if (comp > 0.34 && comp < 0.67) {
    comp = 'gunting';
} else if (comp > 0.68 && comp < 1) {
    comp = 'kertas';
}

var hasil = '';
// menentukan rules

if (p == 'batu') {
    //     hasil = 'seri';
    // } else if (p == 'batu') {
    //     if (comp == 'kertas') {
    //         hasil = ' anda kalah, ccd lu bego'
    //     } else {
    //         hasil = 'anda menang, hoki'
    //     }

    hasil = (comp == 'gunting') ? 'menang lu' : 'kalah lu';

}

if (p == 'kertas') {
    hasil = (comp == 'batu') ? 'menang yey' : 'lau kalah pruy';
}
if (p == 'gunting') {
    hasil = (comp == 'batu') ? 'menang yey' : 'lau kalah pruy';
}
// menampilkan hasil

alert('pilihan mu' + p + 'dan pilihan komputer' + comp + hasil);BaseAudioContext
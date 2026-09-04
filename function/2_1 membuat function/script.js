// function kubus(a, b) {
//     var jumlah;
//     jumlah = a * a * a + b * b * b;

//     return jumlah;
// }

// alert(kubus(8, 3));

// function kubus() {

//     var nilaiA = parseInt(prompt('Masukan nilai A'));
//     var nilaiB = parseInt(prompt('Masukan nilai B'));

//     var KubusA = nilaiA * nilaiA * nilaiA;
//     var KubusB = nilaiB * nilaiB * nilaiB;

//     var total = KubusA + KubusB;

//     return total;
// }

// alert('jumlah kubus a + jumlah kubus b: ' + kubus());

function kubus() {
    // 1. Ambil input user dan ubah string menjadi angka bulat
    var nilaiA = parseInt(prompt('masukan nilai a'));
    var nilaiB = parseInt(prompt('masukan nilai b'));

    // 2. Hitung volume masing-masing kubus
    var kubusA = nilaiA * nilaiA * nilaiA;
    var kubusB = nilaiB * nilaiB * nilaiB;

    // 3. Jumlahkan hasilnya
    var jumlah = kubusA + kubusB;

    // 4. Kembalikan nilainya
    return jumlah;
}

alert('jumlah kubus a + jumlah kubus b: ' + kubus());

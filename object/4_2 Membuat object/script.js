// membuat object 
// 3 cara dalam menulis object

// 1. object literal
var mhs1 = {
    nama: 'alvin rizky', // tambahkan koma di akhir untuk lanjut mengisi nilai selanjutnya
    umur: 21,
    jurusan: 'teknik informatika',
}; // tiap object ditutup dengan titik koma ( ; )

var mhs2 = {
    nama: 'ucup',
    umur: 23,
    jurusan: 'teknik informatika',
};

//2. function declaration
function buatObjectMhs(nama, umur, jurusan) { // urutan parameter harus sesuai dengan urutan variable
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.jurusan = jurusan;
    return mhs;
};

var mhs3 = buatObjectMhs('syakir', 20, 'teknik informatika'); // parameter mengikuti urutan variabel


// 3. Constructor Function
function Mahasiswa(nama, umur, jeniskelamin, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.jeniskelamin = jeniskelamin;
    this.jurusan = jurusan;
}

var mahasiswa1 = new Mahasiswa('joko', 20, 'laki-laki', 'teknik informatika');
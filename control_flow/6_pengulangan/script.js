// s = '';
// for (var i = 0; i < 15; i++) { //bagian ini merupakan increment dimana berapa banyak nilai yang akan di cetak, jadi variabel i merupakan 
//     //sebuah variabel dan juga sistem yang dibuat untuk menentukan berapa kali perulangan itu akan berlangsung
//     // s = s + '*'; dua hal ini adalah 
//     // sama halnya
//     for (var j = 0; j <= i; j++) { //bagian ini merupakan variabel baru dimana ketika variabel i belum mencapai nilai 15
//         s += "*"
//     }
//     s += '\n'; //ini adalah perintah untuk baris baru

// }

// console.log(s); pada kode diatas mencetak 15 baris segitiga bintang dari atas ke bawah secara beruntun

// s = ''; // bagian ini merupakan variabel s yang akan diisi bintang
// for (var i = 0; i < 10; i++) { //bagian ini menentukan banyak baris ke bawah
//     for (var j = 0; j < 10; j++) { //bagian ini menentukan banyak baris ke samping
//         s += "*"
//     }
//     s += '\n';

// }

// console.log(s); // dan console log tidak dimasukan karena agar tidak mengulang lagi di console log bawah

// s = '';
// for (var i = 0; i < 10; i++) { //bagian ini menentukan banyak baris ke bawah
//     for (var j = 10; j > i; j--) { //bagian ini menentukan banyak baris ke samping
//         s += "*"
//     }
//     s += '\n';

// }
// console.log(s); 

let s = '';
let n = 5;

for (let i = 3; i <= n; i++) {
    // Loop untuk mencetak spasi kosong
    for (let j = 1; j <= n - i; j++) {
        s += ' ';
    }
    // Loop untuk mencetak bintang
    for (let k = 1; k <= i; k++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);

//  // contoh penggunaan array
//  var namaMhs= 'sandhika galih';
//  var npm= 10117163;
//  var akreditasi = 'A';
//  var umur= 21;
//  var IPSemester = [3.00, 3.25, 3.50, 3.75, 4.00];

//  function hitungIPK(IPSemester) {
//     let total = 0;
//     for(let i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total / IPSemester.length;
//  }

// // contoh penggunaan array jika disederhanakan

//  var mahasiswa = 
//  ["yoza", true, [2.90, 3.10, 3.39, 4.0, 3.7]];
    
//  function IPKumalatif(IPS){
//    let total = 0;
//    for(let i = 0; i < IPS.length; i++) {
//         total += IPS[i];
//     }
//     return total / IPS.length;
//  }

// jika diperbaiki object


var mahasiswa = { // object menggunakan kurawal { }
    nama :  'yoza', // properti
    lulus : true, // properti
    IPSemester : [2.90, 3.10, 3.39, 4.0, 3.7], // properti
    IPKumulatif : function () { // method
        var total = 0;
        var ips = this.IPSemester;
        for(let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total / ips.length;
    }
} 
mahasiswa.IPKumulatif();
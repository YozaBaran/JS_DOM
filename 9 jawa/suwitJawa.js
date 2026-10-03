function getPilihanComputer() {
    const comp = Math.random();

    // logika penentuan komputer
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';   
}

// menentukan rules
function getHasil (comp, player) {
    if( player == comp ) return 'SERI!';
    // ketika player pilih gajah
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    // ketika player pilih orang
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    // ketika player pilih semut
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

// fungsi animasi putar gambar komputer
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    const interval = setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval(interval);
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}

// Event listener pilihan player
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        // Putar gambar komputer
        putar();

        // Kosongkan info saat sedang diputar
        const info = document.querySelector('.info');
        info.innerHTML = '';

        // Tampilkan hasil setelah putaran 1 detik selesai
        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            info.innerHTML = hasil;
        }, 1000);
    });
});


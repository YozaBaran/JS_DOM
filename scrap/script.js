



const p2 = document.getElementsByTagName('p');
for (let i = 1; i < p2.length; i++) {
    p2[i].style.color = 'red';
}

const judul = document.getElementById('judul');
const p1 = document.getElementsByTagName('p')[0];
const href = document.querySelector('a');
p1.innerHTML = 'paragraf 1 baru';
href.removeAttribute('href');
href.style.color = 'blue';
href.style.textDecoration = 'underline';

// dude gw gak tau ini cara biar paragraf 2 - 4 nya merah tapi setelah p1, cumannya harus kode p2 nya dulu anjir, soalnya ini secara strukturnya gimana ya kek aneh, wkwkwkkwkwkkw

const p1Baru = document.createElement('p');
const teksP1 = document.createTextNode('paragraf 1 baru');
p1Baru.appendChild(teksP1);
// ketiga teks diatas hanya baru mengload element, di js belum memanipulasi langsung

const sectionA = document.getElementById('a');
sectionA.appendChild(p1Baru);


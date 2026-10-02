



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


// membuat insertbefore
// 1. membuat wadah elemen baru
const liBaru = document.createElement('li'); // membuat list baru

// 2. membuat konten untuk teks yang sudah dibuat
const teksLiBaru = document.createTextNode('item baru'); // membuat teks untuk list baru nanti

// 3. merakit dan memasang
liBaru.appendChild(teksLiBaru); // mengaitkan teks dengan list baru, di sini kita sudah mengaitkan list baru dengan teks baru, sekarang tinggal kita pasangkan

const ul = document.querySelector('section#b ul');
// kita harus naik satu tingkat elemen untuk bisa insert before, soalnya elemen yang mau di insert ada di dalam ul

const li2 = ul.querySelector('li:nth-child(2)');
// li2 adalah elemen sebelum di mana list baru akan di letakkan

ul.insertBefore(liBaru, li2);
// ul.insertBefore(elemen yang baru dibuat, sebelum elemen siapa dia akan di letakkan)

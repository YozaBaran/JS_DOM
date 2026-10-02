// bermain dengan warna dengan method pada DOM

const tombol = document.getElementById('tUbahWarna');


// events play
tUbahWarna.onclick = function () {
    //document.body.style.backgroundColor = 'skyblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
}

//membuat tombol langsung dari java
const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('gacha warna');
tombolAcakWarna.appendChild(teksTombol);
// memberi value 
tombolAcakWarna.setAttribute('type', "button");

tombol.after(tombolAcakWarna)
tombolAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})

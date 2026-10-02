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




// pembuatan slider pengatur warna
sliderWarna(); // pemanggilan fungsi sliderWarna
function sliderWarna() {
    const sMerah = document.querySelector('input[name="sMerah"]'); // varibel sMerah
    const sHijau = document.querySelector('input[name="sHijau"]'); // variabel sHijau
    const sBiru = document.querySelector('input[name="sBiru"]'); // varibel sBiru


    // program slider merah
    sMerah.addEventListener('input', function () {
        const r = sMerah.value;
        document.body.style.backgroundColor = 'rgb(' + r + ', 100 , 100)';
    });
    // program slider hijau
    sHijau.addEventListener('input', function () {
        const g = sHijau.value;
        document.body.style.backgroundColor = 'rgb(100, ' + g + ', 100)';
    });
    // program slider biru
    sBiru.addEventListener('input', function () {
        const b = sBiru.value;
        document.body.style.backgroundColor = 'rgb(100, 100, ' + b + ')';
    });
}


// membuat fungsi mouse move

document.body.addEventListener('mousemove', function(event) {
    // posisi mouse, sumbu x dan y
    // clientX : posisi mouse terhadap sumbu x
    // clientY : posisi mouse terhadap sumbu y
    // const x = event.clientX;   // kita bisa tahu saat mouse digerakan
    // const y = event.clientY;   // kita bisa tahu saat mouse digerakan
    // console.log(x, y);
    // ukuran browser, karena ukuran browser berbeda beda

    const xPos = Math.round((event.clientX / window.innerWidth) *  255);
        console.log('xPos: ', xPos);

    const yPos = Math.round((event.clientY / window.innerHeight) *  255);
        console.log('yPos: ', yPos);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)';
})

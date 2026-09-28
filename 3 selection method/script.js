// DOM Selection
// document.getElementById() -> hanya mengembalikan 1 elemen
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'halo dunia';


// document.getElementsByTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'green';
}


// document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].style.color = 'blue';

//event handling

// const close = document.querySelectorAll('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// DOM traversal
// kode ini hanya berlaku jika hanya ada 1 card
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// DOM traversal
// const close = document.querySelectorAll('.close');

// // for (let i = 0; i < close.length; i++) {
// //     close[i].addEventListener('click', function (e) {
// //         e.target.parentElement.style.display = 'none';
// //     });

// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     });
// });

// // method preventdefault
// const close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//     });
// });

//event bubbling

// const close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation(); // mencegah event bubbling
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card){
//     card.addEventListener('click', function (e){
//         alert('ok');
//     })
// });

// menggunakan evcent bubbling jika menambahkan card di web langsung

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if ( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
});
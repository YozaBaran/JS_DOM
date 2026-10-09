const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // mengecek apakah yang dicek adalah thumb
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade')
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500);
        
        e.target.classList.add('active');
        setTimeout(function() {
            e.target.classList.remove('active');
        }, 10);
    }
})
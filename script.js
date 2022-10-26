const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    header.style.backgroundSize = 103 + +window.scrollY/10+ '%';
    // header.style.opacity = 1 - +window.scrollY/800+'';
})

// Slide function for Film Portofolio - Automatic slideshow
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', plusSlides(-1));
next.addEventListener('click', plusSlides(1));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.querySelectorAll('.film-container');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // slideIndex++;
    // if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex - 1].style.display = 'block';
    // setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Black and white section
// reimagine pictures phone, nz012 in the middle and another 2 3 4 sideways, all from mountain
//empty letters in photoshop, picture with us and a half moon

//https://bradandjen.com/ - futured galleries ex, eu pot sa pun pe categorii si sa imi deschida in alte pagini
// - cand dau click pe o imagine sa o vad full screen, cu sageti stanga/dreapta pentru navigare imagini, iar backgound sa fie pagina dinainte dar cu o transparenta mai mica
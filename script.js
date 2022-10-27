//Fadeout landing page when scroll down
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    header.style.backgroundSize = 103 + +window.scrollY/10+ '%';
    // header.style.opacity = 1 - +window.scrollY/800+'';
})

//Slide Film Portofolio with arrows
//implement right left keys
const container = document.getElementById('film-wrapper');
const item = document.getElementsByClassName('film-container');

const prevImg = document.getElementById('prev');
const nextImg = document.getElementById('next');
prevImg.addEventListener('click', prev);
nextImg.addEventListener('click', next);

function matchKey(e) {
    if (e.keyCode === 37) {
        return prev();
    }
    if (e.keyCode === 39) {
        return next();
    }
};
window.addEventListener('keydown', matchKey);

function next() {
    container.append(item[0]);
    container.style.transitionDuration = "2s";
};
function prev() {
    container.prepend(item[item.length - 1]);
    container.style.transition = "all 2s";
};



// Slide function for Film Portofolio - Automatic slideshow
// let slideIndex = 1;
// showSlides(slideIndex);

// const prev = document.getElementsByClassName('prev');
// const next = document.getElementsByClassName('next');

// prev.addEventListener('click', plusSlides(-1));
// next.addEventListener('click', plusSlides(1));


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// };

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName('film-container');
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     // slideIndex++;
//     // if (slideIndex > slides.length) {slideIndex = 1};
//     slides[slideIndex-1].style.display = 'block';
//     // setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

//https://bradandjen.com/ - futured galleries ex, eu pot sa pun pe categorii si sa imi deschida in alte pagini
// - cand dau click pe o imagine sa o vad full screen, cu sageti stanga/dreapta pentru navigare imagini, iar backgound sa fie pagina dinainte dar cu o transparenta mai mica
// - galleries to be presented on a bc fixed img, a little blurry
// Row of imgs max 20vh above footer
// Footer on a bc img fixed

//make the collage section automate like film section but with setTimeOut when is on screen

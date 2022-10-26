const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    header.style.backgroundSize = 103 + +window.scrollY/10+ '%';
    // header.style.opacity = 1 - +window.scrollY/800+'';
})

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
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.push());
// console.log(arr.push(arr.shift())); //move first el to the end
// console.log(arr)

// console.log(arr.unshift(arr.pop())) // move the last element at start
// console.log(arr)

const item = document.querySelectorAll('.film-container');
const imgArr = Array.prototype.slice.call(item);
// console.log(imgArr)
function next() {
    // item.push(item.shift());
    const final = imgArr.shift()
    // console.log(final)
    imgArr.push(final);
    console.log(imgArr)
}
next();

function prev() {
    // item.unshift(item.pop());
    imgArr.unshift(imgArr.pop())
    console.log(imgArr)
}
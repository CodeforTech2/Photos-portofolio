const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    header.style.backgroundSize = 103 + +window.scrollY/10+ '%';
    // header.style.opacity = 1 - +window.scrollY/800+'';
})

// Black and white section
// reimagine pictures phone, nz012 in the middle and another 2 3 4 sideways, all from mountain
//empty letters in photoshop, picture with us and a half moon

//https://bradandjen.com/ - futured galleries ex, eu pot sa pun pe categorii si sa imi deschida in alte pagini
// - cand dau click pe o imagine sa o vad full screen, cu sageti stanga/dreapta pentru navigare imagini, iar backgound sa fie pagina dinainte dar cu o transparenta mai mica
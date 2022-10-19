const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    header.style.backgroundSize = 100 - +window.scrollY/29+ '%';
})

// Black and white section
// reimagine pictures phone, nz012 in the middle and another 2 3 4 sideways, all from mountain
//empty letters in photoshop, picture with us and a half moon

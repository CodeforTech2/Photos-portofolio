const container = document.getElementById('container');

let lastKnownScrollPosition = 0;

window.addEventListener('scroll', (e)=>{
    lastKnownScrollPosition = window.scrollY;
    // console.log(lastKnownScrollPosition);
    if (lastKnownScrollPosition > 300) {
        container.style.marginTop = '200px';
    }
});
const container = document.getElementById('container');

let lastKnownScrollPosition = 0;

window.addEventListener('scroll', (e)=>{
    lastKnownScrollPosition = window.scrollY;
    // console.log(lastKnownScrollPosition);
    if (lastKnownScrollPosition > 300) {
        container.style.marginTop = '200px';
    }
});


//=============================== Login Modal form ===============================
const modalForm = document.getElementById('form');
const loginButton = document.getElementById('login');
const loginCloseButton = document.getElementById('close-login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target == modalForm) {
        modalForm.style.display = 'none';
    }
};

loginButton.addEventListener('click', ()=>{
    modalForm.style.display = 'block';
});

loginCloseButton.addEventListener('click', ()=>{
    modalForm.style.display = 'none';
});
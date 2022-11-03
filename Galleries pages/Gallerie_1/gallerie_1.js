
//=============================== Login Modal form ===============================
const modalForm = document.getElementById('form');
const loginButton = document.getElementById('login');
const loginCloseButton = document.getElementById('close-login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target == modalForm) {
        modalForm.style.display = 'none';
    };
};

loginButton.addEventListener('click', ()=>{
    modalForm.style.display = 'block';
});

loginCloseButton.addEventListener('click', ()=>{
    modalForm.style.display = 'none';
});

loginButton.addEventListener('click', ()=>{
    console.log('test');
});
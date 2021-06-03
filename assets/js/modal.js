const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');

const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');

const modalRegister = document.getElementById('modalRegister');
const modalLogin = document.getElementById('modalLogin');

const btnBackRegister = document.getElementById('btnBackRegister');
const btnBackLogin = document.getElementById('btnBackLogin');

// hiện form đăng ký
btnRegister.addEventListener('click', ()=>{
    modalRegister.classList.add('show-modal');
    // formRegister.classList.add('show-formRegister');
});

// hiện form đăng nhập
btnLogin.addEventListener('click', ()=>{
    modalLogin.classList.add('show-modal');
    // formLogin.classList.add('show-formLogin');
});

// ẩn form đăng ký
btnBackRegister.addEventListener('click', ()=>{
    modalRegister.classList.remove('show-modal')
    
});

//ẩn form đăng nhập
btnBackLogin.addEventListener('click', ()=>{
    modalLogin.classList.remove('show-modal')
    
});
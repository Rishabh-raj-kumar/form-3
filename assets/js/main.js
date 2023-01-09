let hamburg = document.getElementById('hamb');

hamburg.addEventListener('click',() =>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
    let connect = document.querySelector('#connect');
    connect.classList.toggle('active');
})
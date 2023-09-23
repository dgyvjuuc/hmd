let menubtn  = document.getElementById('menubtn');
let navbar = document.querySelector('.navBar');

menubtn.onclick = () => {
    navbar.classList.toggle('active');
    menubtn.classList.toggle('bx-x')
}
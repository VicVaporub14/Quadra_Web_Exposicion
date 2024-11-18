const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');
const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

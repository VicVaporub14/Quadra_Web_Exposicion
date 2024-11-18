document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
});

function navegacionFija() {
    const header = document.querySelector('header');
    const servicios = document.querySelector('.servicios');

    document.addEventListener('scroll', function() {
        console.log();
        if (servicios.getBoundingClientRect().top < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}
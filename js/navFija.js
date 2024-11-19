document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
});

function navegacionFija() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    document.addEventListener('scroll', function() {
        console.log();
        if (hero.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}
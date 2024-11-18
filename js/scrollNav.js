document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
})

function scrollNav() {
    const navLinks = document.querySelectorAll('.dropdown-menu li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: 'smooth'});
        });
    });
}
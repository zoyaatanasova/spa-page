const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', function () {
    header.classList.toggle('header--open');
});

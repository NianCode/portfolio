

window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 10) { /* Defina a quantidade de scroll aqui */
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
};
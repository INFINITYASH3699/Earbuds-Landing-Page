document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
            document.body.classList.add('sticky-padding');
        } else {
            navbar.classList.remove('sticky');
            document.body.classList.remove('sticky-padding');
        }
    };
});

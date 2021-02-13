// JavaScript source code

$(document).ready(function () {
    // $("#screen1").hide();

    $("#screen2").hide();

    $(".s-front_open").click(function () {
        $("#screen1").fadeOut(1800);
        $("#screen2").fadeIn(1900);
    });
});

var aos_container = document.querySelectorAll('.aos_container');

for (let i = 0; i < aos_container.length; i++) {
    window.addEventListener('scroll', (e) => {
        var positionY = aos_container[i].getBoundingClientRect().top - (window.innerHeight / 2);
        aos_container[i].style.position = 'relative';
        if (positionY <= 0) {
            aos_container[i].classList.add('active');
        } else {
            aos_container[i].classList.remove('active');
        }
    })
}

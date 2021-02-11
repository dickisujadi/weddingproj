// JavaScript source code

$(document).ready(function () {
    // $("#screen1").hide();

    $("#screen2").hide();

    $(".s-front_open").click(function () {
        $("#screen1").fadeOut(1800);
        $("#screen2").fadeIn(1900);
    });
});

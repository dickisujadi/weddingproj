// JavaScript source code
$(function() {
    $("#brown2").height($("#kami").height());
});

$(document).ready(function () {
    // $('#kami').each(function() {
    //     $('#brown2').setAttribute("style", "height:" + );
    // })
    // $("#screen1").hide();

    $("#screen2").hide();

    $(".s-front_open").click(function () {
        $("#screen1").fadeOut(1800);
        $("#screen2").fadeIn(1900);
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }

    function successFunction(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var position = lat + ',' + long;

        $('#saddr').text(position);
    }

    function errorFunction() {
        try {
            lat = position.coords.latitude;
            long = position.coords.longitude;
        }
        catch(error) {
            console.log(error);
        }
    }

    // var kami = document.getElementById('s-container5');
    // console.log(kami.clientHeight);
    // $(function() {
        console.log($("#brown2").height());
    //  })
    // document.getElementById('brown2').setAttribute("style", "height: " + document.getElementById('kami').clientHeight);
    // console.log("kami height " + document.getElementById('kami').clientHeight);
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

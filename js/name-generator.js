 
$(document).ready(function() {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    var uniquename = getUrlParameter('uniquename');
    if (uniquename == false) {
        $('#screen1').hide();
        $('#screen2').hide();
    } else {
        try {
            if (uniquename == 'EvieSujadi') {
                document.getElementsByClassName("name1").innerHTML = "Evie Sujadi";
                document.getElementsByClassName("name2").innerHTML = "Evie Sujadi";
                // document.getElementById("name1").innerHTML = "Evie Sujadi";
                // document.getElementById("name2").innerHTML = "Evie Sujadi";
                // $('#name').innerHTML = 'Evie Sujadi';
                console.log('Name : ' + uniquename);                
            }
        } catch (error) {
            console.log('error ' + error);
        }
    }
});
$(document).ready(function(){
    //Datepicker initialisation
    var date_input=$('input[name="date"]'); //date input has the name 'date'
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
    orientation: 'top left',
    format: 'dd/mm/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true
    };
    date_input.datepicker(options);

    $('.datepicker').datepicker();

    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });

    $('.datepicker').datepicker({
        startDate: '-3d'
    });

    $.fn.datepicker.defaults.format = "mm/dd/yyyy";
    $('.datepicker').datepicker({
        startDate: '-3d'
    });

    //Prevents form reset after submission
    $("#filter").submit(function(e) {
        e.preventDefault();
    });

    //Showing modal dialog
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    //Hide searchresults at first
    // $("#searchResultSection").css("visibility", "hidden");
})


//Filter based on form input
function filter() {
    
    //Collects user input
    var prevShiftsInput, distanceInput, tariffInput, scoreInput;
    prevShiftsInput = $("#prevShifts").val();
    distanceInput = $("#distance").val();
    tariffInput = $("#tariff").val();
    scoreInput = $("#score").val();

    //Collects all user data and makes it compatible
    // //Vera
    var veraUserTags = getVeraUserInfo();
    var veraScore = veraUserTags[0];
    var veraTariff = veraUserTags[1];
    var veraDistance = veraUserTags[2];
    var veraPrevShifts = veraUserTags[3];
    // //Jan
    var janUserTags = getJanUserInfo();
    var janScore = janUserTags[0];
    var janTariff = janUserTags[1];
    var janDistance = janUserTags[2];
    var janPrevShifts = janUserTags[3];
    // //Anne
    var anneUserTags = getAnneUserInfo();
    var anneScore = anneUserTags[0];
    var anneTariff = anneUserTags[1];
    var anneDistance = anneUserTags[2];
    var annePrevShifts = anneUserTags[3];

    console.log(veraScore);

    //filtering
    if (prevShiftsInput > veraPrevShifts && distanceInput < veraDistance && tariffInput < veraTariff && scoreInput > veraScore)    
    {
        $('#veraRow').remove();
    } else {
        
    }
}

function getVeraUserInfo() {
    //collects userinfo and convert it to compatible values
    //score
    var veraScore = document.getElementById("veraScore").innerHTML;
    veraScore = veraScore.replace(/,/, '.');
    veraScore = parseFloat(veraScore);
    //tariffs
    var veraTariff = document.getElementById("veraTariff").innerHTML;
    veraTariff = veraTariff.replace(/€/,'');
    veraTariff = veraTariff.replace(/,/,'.');
    veraTariff = parseFloat(veraTariff);
    //distance
    var veraDistance = document.getElementById("veraDistance").innerHTML;
    veraDistance = veraDistance.replace(/ /,'');
    veraDistance = veraDistance.replace('km','');
    veraDistance = parseInt(veraDistance);
    //previous shifts
    var veraPrevShifts = document.getElementById("veraPrevShifts").innerHTML;
    veraPrevShifts = veraPrevShifts.replace(' voorafgaande diensten', '');
    veraPrevShifts = parseInt(veraPrevShifts);

    return [veraScore, veraTariff, veraDistance, veraPrevShifts];
}

function getJanUserInfo() {
    //collects userinfo and convert it to compatible values
    //score
    var janScore = document.getElementById("janScore").innerHTML;
    janScore = janScore.replace(/,/, '.');
    janScore = parseFloat(janScore);
    //tariffs
    var janTariff = document.getElementById("janTariff").innerHTML;
    janTariff = janTariff.replace(/€/,'');
    janTariff = janTariff.replace(/,/,'.');
    janTariff = parseFloat(janTariff);
    //distance
    var janDistance = document.getElementById("janDistance").innerHTML;
    janDistance = janDistance.replace(/ /,'');
    janDistance = janDistance.replace('km','');
    janDistance = parseInt(janDistance);
    //previous shifts
    var janPrevShifts = document.getElementById("janPrevShifts").innerHTML;
    janPrevShifts = janPrevShifts.replace(' voorafgaande diensten', '');
    janPrevShifts = parseInt(janPrevShifts);

    return [janScore, janTariff, janDistance, janPrevShifts];
}

function getAnneUserInfo() {
    //collects userinfo and convert it to compatible values
    //score
    var anneScore = document.getElementById("anneScore").innerHTML;
    anneScore = anneScore.replace(/,/, '.');
    anneScore = parseFloat(anneScore);
    //tariffs
    var anneTariff = document.getElementById("anneTariff").innerHTML;
    anneTariff = anneTariff.replace(/€/,'');
    anneTariff = anneTariff.replace(/,/,'.');
    anneTariff = parseFloat(anneTariff);
    //distance
    var anneDistance = document.getElementById("anneDistance").innerHTML;
    anneDistance = anneDistance.replace(/ /,'');
    anneDistance = anneDistance.replace('km','');
    anneDistance = parseInt(anneDistance);
    //previous shifts
    var annePrevShifts = document.getElementById("annePrevShifts").innerHTML;
    annePrevShifts = annePrevShifts.replace(' voorafgaande diensten', '');
    annePrevShifts = parseInt(annePrevShifts)

    return [anneScore, anneTariff, anneDistance, annePrevShifts];
}

//Invisable table when page is loaded
//When searching with filter, delete required rows 
//When not using filter or certain inputs, ignore them
//Make the table visable

//Extra steps:
//Collect the reviewscore as a string, convert it to a integer
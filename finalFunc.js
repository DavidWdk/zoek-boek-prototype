//the final version of the code for the 'zoek & boek' function.
//this version is scalable and automated in a more professional manner.
  
$(document).ready(function(){
    renderFreelancer();
    datepicker();
});

//bootstrap date picker
function datepicker() {
    //datepicker initialization
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
        format: 'dd/mm/yyyy',
        startDate: '-3d'
    });

    $('.datepicker').datepicker({
        startDate: '-3d'
    });

    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
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
}

//freelancer's data. Later used in the modals, searchresults and filter.
let freelancers = [];

let vera = {
    id: 0,
    bio: 'Ik ben Vera de Gaal. Ik ben breed opgeleid waardoor ik geschikt ben voor functies die meerdere vaardigheden vereisen.',
    mail: 'Vera@degaal.nl',
    phone: '06 233 91 831',
    location: 'Zandpol',
    name: "Vera de Gaal",
    score: 8.3,
    tariff: 40.00,
    reactionTime: 48,
    distance: 8,
    prevShifts: 8,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'PGB-zorg', color: '#03415E', background: '#5AC8FA'},
                {name: 'Eerstelijnszorg', color: '#564500', background: '#FFCC00'},
                {name: 'GGZ', color: '#00350D', background: '#34C759'}]
};

let jan = {
    id: 1,
    bio: 'Hoi, ik ben Jan - gespecialiseerd in jeugd-, PGB-, eerstelijns- en tweedelijnszorg. Daarnaast kan ik ook bloedprikken. Ik kan erg goed met kinderen omgaan en ben momenteel een opleiding autismezorg aan het doen',
    mail: 'Jan@Bierman.nl',
    phone: '06 223 19 034',
    location: 'Amsterdam',
    name: "Jan Bierman",
    score: 7.1,
    tariff: 35.00,
    reactionTime: 23,
    distance: 41,
    prevShifts: 4,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'PGB-zorg', color: '#03415E', background: '#5AC8FA'},
                {name: 'Eerstelijnszorg', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'}]
};

let anne = {
    id: 2,
    bio: 'Dag, ik ben Anne. Ik ben 23 jaar en sinds kort afgestudeerd in de HBO-opleiding gezondheidszorg, maar heb al 3 jaar werkervaring en heb daarmee een sterke fundering.',
    mail: 'Anne@spaak.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Anne Spaak",
    score: 6.3,
    tariff: 22.50,
    reactionTime: 14,
    distance: 33,
    prevShifts: 3,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijnszorg', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let kees = {
    id: 2,
    bio: 'Dag, ik ben Kees. Ik ben 49 en heb vele jaren ervaring in de zorg. Mijn specialiteit is mijn brede kennis.',
    mail: 'Kees@vandijk.nl',
    phone: '06 242 91 282',
    location: 'Roermond',
    name: "Kees van Dijk",
    score: 5.9,
    tariff: 17.50,
    reactionTime: 4,
    distance: 87,
    prevShifts: 2,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijnszorg', color: '#564500', background: '#FFCC00'},
                {name: 'GGZ', color: '#00350D', background: '#34C759'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let joost = {
    id: 2,
    bio: 'Ik ben Joost te Paske, ik heb vele jaren kennis in de zorg en heb daarmee een sterke fundering opgebouwd rondom tweedelijnszorg, jeugdzorg, GGZ en austismezorg.',
    mail: 'Joost@tepaske.nl',
    phone: '06 891 93 223',
    location: 'Eindhoven',
    name: "Joost te Paske",
    score: 6.1,
    tariff: 35.00,
    reactionTime: 12,
    distance: 56,
    prevShifts: 12,
    functions: [{name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name: 'GGZ', color: '#00350D', background: '#34C759'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let tessa = {
    id: 2,
    bio: 'Ik vraag weinig voor mijn diensten, maar u krijgt er veel voor terug. Ik ben tevens erg flexibel en heb veel kennis rondom de onderstaande functies.',
    mail: 'tessa@heuvels.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Tessa Heuvels",
    score: 7.8,
    tariff: 29.00,
    reactionTime: 10,
    distance: 42,
    prevShifts: 0,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name: 'Gehandicaptenzorg', color: '#1A4C4A', background: '#9DD9D2'},
                {name:'Eerstelijnszorg', color: '#564500', background: '#90C2E7'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'}]
};

let aulona = {
    id: 2,
    bio: 'Ik heb een MBO- en HBO-opleiding zorg gedaan, en heb daarmee veel kennis opgebouwd. Ik behandel graag kinderen en bejaarden, ook in uw zorginstelling.',
    mail: 'aulona@dreshaj.nl',
    phone: '06 290 12 132',
    location: 'Rotterdam',
    name: "Aulona Dreshaj",
    score: 7.3,
    tariff: 20,
    reactionTime: 8,
    distance: 53,
    prevShifts: 14,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name: 'GGZ', color: '#00350D', background: '#34C759'},
                {name:'Eerstelijnszorg', color: '#564500', background: '#90C2E7'},
                {name: 'Bejaardenzorg', color: '#092327', background: '#00A9A5'}]
};

let sharmaine = {
    id: 2,
    bio: 'Ik ben een goedkope invalskracht maar verzeker u dat ik een uitstekende vervanger ben. Mijn prijs kwaliteit verhouding is erg hoog.',
    mail: 'Sharmaine@janssen.nl',
    phone: '06 123 78 883',
    location: 'Wolvega',
    name: "Sharmaine Janssen",
    score: 6.2,
    tariff: 17.50,
    reactionTime: 2,
    distance: 31,
    prevShifts: 23,
    functions: [{name: 'GGZ', color: '#00350D', background: '#34C759'},
                {name: 'Gehandicaptenzorg', color: '#1A4C4A', background: '#9DD9D2'},
                {name: 'PGB-Zorg', color: '#4D2D52', background: '#F08CAE'},
                {name: 'Bejaardenzorg', color: '#092327', background: '#00A9A5'}]
};

let sjoerd = {
    id: 2,
    bio: 'Ik heb mijn bachalor verzorging behaald, en heb veel ervaring opgebouwd in de zorg als freelancer. Hiermee ben ik kwalitatief een van de beste vervangers voor uw zorgprofessional.',
    mail: 'Sjoerd@Moonen.nl',
    phone: '06 231 44 126',
    location: 'Overdijk',
    name: "Sjoerd Moonen",
    score: 8.1,
    tariff: 40.00,
    reactionTime: 35,
    distance: 57,
    prevShifts: 9,
    functions: [{name: 'Bejaardenzorg', color: '#092327', background: '#00A9A5'}, 
                {name:'Eerstelijns', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let bas = {
    id: 2,
    bio: 'Ik ben Bas Rouing, een goede zorgprofessional met relatief veel ervaring. Ik sta altijd paraat uw klanten de beste verzorging te geven.',
    mail: 'Bas@rouing.nl',
    phone: '06 087 13 235',
    location: 'Maastricht',
    name: "Bas Rouing",
    score: 5.1,
    tariff: 22.50,
    reactionTime: 5,
    distance: 40,
    prevShifts: 11,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijnszorg', color: '#564500', background: '#FFCC00'},
                {name: 'Gehandicaptenzorg', color: '#1A4C4A', background: '#9DD9D2'},
                {name: 'PGB-Zorg', color: '#4D2D52', background: '#F08CAE'}]
};

//pushes the freelancer data 
freelancers.push(vera);
freelancers.push(jan);
freelancers.push(sjoerd);
freelancers.push(anne);
freelancers.push(tessa);
freelancers.push(aulona);
freelancers.push(sharmaine);
freelancers.push(joost);
freelancers.push(bas);
freelancers.push(kees);

//shows the searchresults: loops through every freelancer with the accessory data 
function renderFreelancer() {
    //check if necessary fields are valid
    dateInput = $("#date").val();

    //prevent duplicate results
    $(".resultRow").remove();

    if(dateInput !== "") {
            $.each(freelancers, function(i, v){
            var output = '<tr class="resultRow" id="freelancer_'+v.id+'">';
            output += '<form id="freelancerSelection"><th scope="row">';
            output += '<input type="checkbox" class="checkbox-round" id="checkbox"/></th>';
            output += '<td><button class="modalRef" onclick="showModal('+v.id+')">';
            output += '<b>'+v.name+ '<span style="color:#808080;"> '+v.distance+' km</span></button></b><br>';
            output += '<span style="color:#808080;">'+v.prevShifts+' voorgaande diensten</span></td>';
            output += '<td class="skillsPadding"><div class="skillContainer">';
                //loops through all the skills of a given freelancer, with the accessory colors that belong to each skill.
                $.each(v.functions, function(n, va){
                    output += '<div class="skill" style="background-color:'+va.background+'; color:'+va.color+';">'+va.name+'</div>'
                });
            output += '</div></td>'
            output += '<td><span style="font-size: 30px; font-weight:800;">€'+v.tariff+'</span> BTW vrij</td>'
            output += '<td><span style="font-size: 30px; font-weight:800;">'+v.reactionTime+'</span> uur</td>'
            output += '<td><span style="font-size: 30px; font-weight:800; color:#34C759">'+v.score+'</span></td></td>'
            output += '</form></tr>'

            $("#freelancerResults").append(output);
        })
    }
    else{}
}

//checks if there are any freelancers selected, and gives the user a message
function inviteFreelancers() {
    freelancerCount = $('tr :input[type="checkbox"]:checked').length

    if(freelancerCount > 0) {
        alert("Dienst succesvol verstuurd naar "+freelancerCount+" ZZP'ers.");
        location.reload();
    } else {
        alert("Selecteer eerst ZZP'ers om een opdracht naar te sturen.");
    }
} 

//filter: collects the values of the userinput and filters the searchresults
//also parses all the userinput into numbers
function filter() {
    renderFreelancer();

    var prevShiftsInput, distanceInput, tariffInput, scoreInput;
    prevShiftsInput = $("#prevShifts").val();
    distanceInput = $("#distance").val();
    tariffInput = $("#tariff").val();
    scoreInput = $("#score").val();

    //if filter input is empty, make sure to show all results
    if (prevShiftsInput == "") {
        prevShiftsInput = 0;
    }

    if (distanceInput == "") {
        distanceInput = 10000;
    }

    if (tariffInput == "") {
        tariffInput = 10000;
    }

    if (scoreInput == "") {
        scoreInput = 0;
    }

    $.each(freelancers, function(i, v){
        if(Number(prevShiftsInput) > v.prevShifts || Number(distanceInput) < v.distance || Number(tariffInput) < v.tariff || Number(scoreInput) > v.score){
            $('#freelancer_'+v.id).hide();
        }
        else {
            $('#freelancer_'+v.id).show();
        }
    })
}

//when clicking on the name of a freelancer, this function will show a modal with the correct information by
//searching the ID of the freelancer with the accessory freelancer data
function showModal(id) {
    $.each(freelancers, function(i, v){
        if(v.id == id) {
            var output = '<div class="modal-dialog modal-lg" role="document">'
            output += '<div class="modalContent"><div class="modalHead">';
            output += '<h3>'+v.name+'</h3> <h4 style="margin-left:10px;">'+v.prevShifts+' voorafgaande diensten</h4>'
            output += '<button onclick="closeModal()" class="close ml-auto" data-dismiss="modal" aria-label="Close"><img src="img/close.png" class="close" style="width:30px;"/></button></div>'
            output += '<div class="modalBody"><div class="row">'
            output += '<img src="img/user.png" class="col-2" style="height:105px; align-self:center;">'
            output += '<div class="col-10"><h5>BIO</h5>'
            output += v.bio 
            output += '</div></div>'
            output += '<h5 style="margin-top:30px;">ALLE KWALIFACTIES & FUNCTIES</h5>'
            output += '<div class="row" style="margin-left:-2px; margin-right:-2px;">'
                //loops through the skills and accessory colors of the given person
                $.each(v.functions, function(n, va){
                    output += '<div class="skill" style="background-color:'+va.background+'; color:'+va.color+';">'+va.name+'</div>'
                });
            output += '</div>'
            output += '<div class="row" style="margin-top:30px;">'
            output += '<h5 class="col">REVIEWSCORE</h5> <h5 class="col">REACTIEDUUR</h5> <h5 class="col">UURTARIEF</h5>'
            output += '</div>'
            output += '<div class="row" style="margin-top:-10px;">'
            output += '<span class="col-4" style="font-size: 30px; font-weight:800; color:#34C759">'+v.score+'</span>'
            output += '<span class="col-4"style="font-size: 30px; font-weight:800;">'+v.reactionTime+'</span>'
            output += '<span class="col-4" style="font-size: 30px; font-weight:800;">€'+v.tariff+'</span>'
            output += '</div>'
            output += '<div class="row" style="margin-top:30px; margin-left: 0px;">'
            output += '<h5>LOCATIE</h5>'
            output += '</div>'
            output += '<div class="row" style="margin-top:-10px; margin-left: 0px;">'
            output += ''+v.location+' <span style="color:#858585; margin-left: 10px;">'+v.distance+'km</span>'
            output += '</div>'
            output += '<div class="row" style="margin-top:30px; margin-left: 0px;">'
            output += '<h5>NEEM CONTACT OP</h5> <h5 class="ml-auto" style="margin-right:15px;">DOWNLOAD CV</h5>'
            output += '</div>'
            output += '<div class="row" style="margin-top:-10px; margin-left: 0px;">'
            output += '<i class="fas fa-envelope" style="margin: 8px 8px 0 0;"></i> '+v.mail+' <i class="fas fa-download ml-auto" style="margin-right:15px; margin-top: 15px;"></i>'
            output += '</div>'
            output += '<div class="row" style="margin-top:-5px; margin-left: 0px;">'
            output += '<i class="fas fa-phone" style="margin: 8px 8px 0 0;"></i>'+v.phone;
            output += '</div></div></div></div>'
            
            //fill in the modal with the output value, which has all the needed information
            $('#modal').empty().append(output).show();

        } else {
            //do nothing
        }
    })
}

//function to hide the modal, activates when pressing the close button
function closeModal() {
    $('#modal').hide();
}
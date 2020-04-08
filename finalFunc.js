$(document).ready(function(){
    renderFreelancer();

    //datepicker
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
});

let freelancers = [];

let vera = {
    id: 0,
    bio: 'Hoi, ben Vera vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
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
    bio: 'Hoi, ben Jan vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
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
    bio: 'Hoi, ben Anne vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
    mail: 'Anne@spaak.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Anne Spaak",
    score: 6.3,
    tariff: 22.50,
    reactionTime: 14,
    distance: 33,
    prevShifts: 0,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijns', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let a = {
    id: 2,
    bio: 'Hoi, ben Anne vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
    mail: 'Anne@spaak.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Anne Spaak",
    score: 6.3,
    tariff: 22.50,
    reactionTime: 14,
    distance: 33,
    prevShifts: 0,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijns', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let b = {
    id: 2,
    bio: 'Hoi, ben Anne vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
    mail: 'Anne@spaak.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Anne Spaak",
    score: 6.3,
    tariff: 22.50,
    reactionTime: 14,
    distance: 33,
    prevShifts: 0,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijns', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

let c = {
    id: 2,
    bio: 'Hoi, ben Anne vet goed in bloedprikken en ook in tweedelijnszorg maar ook eerstelijnszorg en ja dat was het',
    mail: 'Anne@spaak.nl',
    phone: '06 221 99 283',
    location: 'Rotterdam',
    name: "Anne Spaak",
    score: 6.3,
    tariff: 22.50,
    reactionTime: 14,
    distance: 33,
    prevShifts: 0,
    functions: [{name:'Jeugdzorg', color: '#5C0601', background: '#FF453A'}, 
                {name:'Eerstelijns', color: '#564500', background: '#FFCC00'},
                {name: 'Tweedelijnszorg', color: '#12021A', background: '#BF5AF2'},
                {name: 'Autismezorg', color: '#471b0e', background: '#FF7751'}]
};

freelancers.push(vera);
freelancers.push(jan);
freelancers.push(anne);
freelancers.push(a);
freelancers.push(b);
freelancers.push(c);

function renderFreelancer() {
    $.each(freelancers, function(i, v){
        var output = '<tr id="freelancer_'+v.id+'">';
        output += '<form><th scope="row">';
        output += '<input type="checkbox" class="checkbox-round" id="checkbox"/></th>';
        // output += '<td><a href="#modal" class="modalLink" data-toggle="modal" data-target="#modal">';
        output += '<td><button class="modalRef" onclick="showModal('+v.id+')">';
        output += '<b>'+v.name+ '<span style="color:#808080;"> '+v.distance+' km</span></button></b><br>';
        output += '<span style="color:#808080;">'+v.prevShifts+' voorgaande diensten</span></td>';
        output += '<td class="skillsPadding"><div class="skillContainer">';

            $.each(v.functions, function(n, va){
                output += '<div class="skill" style="background-color:'+va.background+'; color:'+va.color+';">'+va.name+'</div>'
            });
        output += '</div></td>'
        output += '<td><span style="font-size: 30px; font-weight:800;">€'+v.tariff+'</span> BTW vrij</td>'
        output += '<td><span style="font-size: 30px; font-weight:800;">'+v.reactionTime+'</span> uur</td>'
        output += '<td><span style="font-size: 30px; font-weight:800; color:#34C759">'+v.score+'</span></td></td>'
        output += '</tr>'

        $("#freelancerResults").append(output);
    })
}

function filter() {
    var prevShiftsInput, distanceInput, tariffInput, scoreInput;
    prevShiftsInput = $("#prevShifts").val();
    distanceInput = $("#distance").val();
    tariffInput = $("#tariff").val();
    scoreInput = $("#score").val();

    $.each(freelancers, function(i, v){
        if(Number(prevShiftsInput) > v.prevShifts || Number(distanceInput) < v.distance || Number(tariffInput) < v.tariff || Number(scoreInput) > v.score){
            $('#freelancer_'+v.id).hide();
        }
        else {
            $('#freelancer_'+v.id).show();
        }
    })
}

function showModal(id) {
    $.each(freelancers, function(i, v){
        if(v.id == id) {
            var output = '<div class="modal-dialog modal-lg" role="document">'
            output += '<div class="modalContent"><div class="modalHead">';
            output += '<h3>'+v.name+'</h3> <h4 style="margin-left:10px;">'+v.prevShifts+' voorafgaande diensten</h4>'
            output += '<button onclick="closeModal()" class="close ml-auto" data-dismiss="modal" aria-label="Close"><img src="img/close.png" class="close" style="width:30px;"/></button></div>'
            // output += '</div>'
            output += '<div class="modalBody"><div class="row">'
            output += '<img src="img/user.png" class="col-2" style="height:105px; align-self:center;">'
            output += '<div class="col-10"><h5>BIO</h5>'
            output += v.bio 
            output += '</div></div>'
            output += '<h5 style="margin-top:30px;">ALLE KWALIFACTIES & FUNCTIES</h5>'
            output += '<div class="row" style="margin-left:-2px; margin-right:-2px;">'
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

            $('#modal').empty().append(output).show();

        } else {
            //
        }

    })
}
function closeModal() {
    $('#modal').hide();
}
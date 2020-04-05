//Datepicker
$(document).ready(function(){
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

    //Prevent form from resseting after submission
    $("#filter").submit(function(e) {
        e.preventDefault();
    });

    //Modal code
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
})
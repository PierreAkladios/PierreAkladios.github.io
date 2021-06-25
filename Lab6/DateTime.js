//<!--code from https://bbbootstrap.com/snippets/dark-themed-date-and-time-picker-76906698-->
$(document).ready(function(){

$('.datepicker').datepicker({
format: 'dd-mm-yyyy',
autoclose: true,
startDate: '0d'
});

$('.cell').click(function(){
$('.cell').removeClass('select');
$(this).addClass('select');
});

});

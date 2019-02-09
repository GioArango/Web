$(document).ready(function(){
	
	var caja = $('#caja');

	$('#btnMostrar').click(function() {
		caja.show('fast').animate({opacity: 1});	
	});

	$('#btnOcultar').click(function() {
		caja.hide('fast');	
		caja.slideUp();
	});

	$('#btnAnimar').click(function()  {
		caja.animate({marginLeft: 500, marginTop: 200, opacity: 0.2, left: '+=200', height: 'toggle'}, 'slow').append('<div>Animation complete.</div>')
	});
});
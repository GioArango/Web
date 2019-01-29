$(document).ready(function(){
	
	//Selector de ID
	var rojo = $("#rojo").css("background","red")
						 .css("color","white");

	var amarillo = $("#amarillo").css("background","yellow")
								 .css("color","blue");

	var verde = $("#verde").css("background","green")
								 .css("color","yellow");

	//Selector de clases
	var mi_clase = $('.zebra');
	var sin_borde = $('.sin_borde');


	mi_clase.css("border","5px dashed black");
	sin_borde.click(function(event) {
		console.log('click dado!');
		$(this).addClass('zebra');
	});


	//Selectores de etiqueta
	var parrafos = $('p').css("cursor","pointer");

	parrafos.click(function() {
		var that = $(this);
		if (!that.hasClass('grande')) {
			that.addClass('grande');	
		}else{
			that.removeClass('grande');	
		}		
	});


	//Selectores de atributo

	$('[title="Google"]').css("background","#ccc");
	$('[title="Facebook"]').css("background","blue");

	
	//Otros
	//$('p,a').addClass('margen-superior');

	var busqueda = $("#caja").find('.resaltado');

	console.log(busqueda);

});
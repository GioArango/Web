$(document).ready(function(){

	//MouseOver
	var caja = $('#caja');

	/*
	caja.mouseover(function(event) {
		$(this).css("background","blue");
	});

	caja.mouseover(function(event) {
		$(this).css("background","yellow");
	});
	*/
	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}

	//Hover
	caja.hover(cambiaVerde, cambiaRojo);


	//Click, Doble Click
	caja.click(function(event) {
		$(this).css("background","blue").css("color","white");
	});

	caja.dblclick(function(event) {
		$(this).css("background","black").css("color","yellow");
	});

	//Focus y blur
	var nombre = $('#nombre');
	var datos = $('#datos');

	nombre.focus(function(event) {
		$(this).css("border","2px solid green");
	});

	nombre.blur(function(event) {
		$(this).css("border","1px solid #ccc");
		$(this).val(); //capturar valor del this JQuery
		datos.text($(this).val()).show();
	});

	//MouseDown y MouseUp
	datos.mousedown(function(event) {
		$(this).css("borderColor","gray");
	});

	datos.mouseup(function(event) {
		$(this).css("borderColor","purple");
	});

	//MouseMove
	$(document).mousemove(function(event) {
		console.log("en X: "+event.clientX);
		console.log("en Y: "+event.clientY);

		var sigueme =  $('#sigueme');
		sigueme.css("left",event.clientX).css("top",event.clientY);
	});

});
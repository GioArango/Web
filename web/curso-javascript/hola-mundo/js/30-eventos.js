'use strict'

//EVENTOS: Es recomendable encapsular todos los elementos en el codigo javascript

//eventos del raton

window.addEventListener('load', () => {
	function cambiarColor() {
		var bg = boton.style.background;
		if (bg == 'green') {
			boton.style.background = "red";
		} else {
			boton.style.background = "green";
		}

		boton.style.padding = '10px';
		boton.style.border = '1px solid #ccc';

		return true;
	}

	var boton = document.querySelector("#boton");

	//Captura el evento click
	boton.addEventListener('click', function() {
		cambiarColor();
	});

	//Mouse over
	boton.addEventListener('mouseover', function() {
		boton.style.background = 'yellow';
	});

	//Mouseout
	boton.addEventListener('mouseout', function() {
		boton.style.background = 'black';
	});

	//Focus
	var input = document.querySelector("#campo_nombre");

	input.addEventListener('focus', function() {
		console.log("Estas haciendo foco dentro del input");
	});

	//Blur
	input.addEventListener('blur', function() {
		console.log("Estas afuera del input");
	});

	//KeyDown
	input.addEventListener('keydown', function(event) {
		console.log("Estas pulsando la tecla", String.fromCharCode(event.keyCode));
	});

	//Keypress
	input.addEventListener('keypress', function(event) {
		console.log("Tecla presionada", String.fromCharCode(event.keyCode));
	});

	//Keyup
	input.addEventListener('keyup', function(event) {
		console.log("Tecla soltada", String.fromCharCode(event.keyCode));
	});
}); //enload
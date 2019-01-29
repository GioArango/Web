'use strict'

window.addEventListener('load', function(){
	console.log('DOM Cargado');

	var formulario = document.querySelector('#formulario');
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = 'none';

	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado")

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if(nombre == null || nombre.trim().length == 0){
			alert("El nombre no es válido");
			return false;
		}

		if(apellidos == null || apellidos.trim().length == 0){
			alert("Los apellidos no son válidos");
			return false;
		}

		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("La edad no es válida");
			return false;
		}

		box_dashed.style.display = 'block';

		var datos_usuario = [nombre, apellidos, edad];

		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
	});
});
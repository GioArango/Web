'use strict'

function holaMundo(texto){
	var hola_mundo = "Texto dentro funcion";

	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";

holaMundo(texto);

// console.log(hola_mundo); // nop puede ejecutar esta linea ya que la variable que invoco solo esta creada dentro de la funcion
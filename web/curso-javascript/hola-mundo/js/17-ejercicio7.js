'use strict'

// tabla de multiplicar de un numero introducido

var numero = parseInt(prompt("Introduzca un número"));
var resultado = 0;

for(var i = 0; i <= 12; i++){
	resultado = numero * i;
	document.write(numero + "x" + i + ":" + resultado + "<br/>");
}
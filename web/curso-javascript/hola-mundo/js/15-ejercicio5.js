'use strict'

//muestre todos los numeros divisores de un numero introducido 

var numero = parseInt(prompt("Introduzca un numero"));

for(var i = 0; i < numero; i++){
	if(numero%i == 0){
		console.log("numeros divisores de " + numero + ": " + i);
	}
}
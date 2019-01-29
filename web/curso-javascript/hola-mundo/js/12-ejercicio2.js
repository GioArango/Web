'use strict'

//Utilizando un bucle mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt("Introduce numeros hasta meter uno negativo", 0));
	if(isNaN(numero)){
		numero = 0;
	}else if(numero > 0){
		suma += numero;
		contador++;
	}
	console.log("suma: "+suma);
	console.log("contador "+contador);
}while(numero >= 0)

alert("resultado de la suma de todos los numeros: " + suma);
alert("La media de todos los numeros: " + (suma/contador));

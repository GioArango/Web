'use strict'

//Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introduzca el primer numero"));
var numero2 = parseInt(prompt("Introduzca el segundo numero"));

for(var i = numero1; i < numero2; i++){
	if(i%2 != 0){
		console.log("Numeros impares: " + i);
	}
}
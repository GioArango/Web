'use strict'

/*
programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son numeros o menores que cero que vuelva a pedir los numeros
*/

var numero1 = parseInt(prompt("Ingrese el primer número", 0));
var numero2 = parseInt(prompt("Ingrese el segundo número", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt("Ingrese el primer número", 0));
	numero2 = parseInt(prompt("Ingrese el segundo número", 0));	
}


if(numero1 > numero2){
	//console.log("El primer numero es mayor que el segundo, primer numero: "+numero1+" segundo numero: "+numero2);
	alert("El primer numero es mayor que el segundo, primer numero: "+numero1+" segundo numero: "+numero2);
}else if(numero1 <numero2){
	//console.log("El segundo numero es el mayor, el primero el menor, primer numero: "+numero1+" segundo numero: "+numero2);
	alert("El segundo numero es el mayor, el primero el menor, primer numero: "+numero1+" segundo numero: "+numero2);
}else if(numero1 == numero2){
	//console.log("Los numeros ingresados son iguales");
	alert("Los numeros ingresados son iguales");
}
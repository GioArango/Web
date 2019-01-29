'use strict'

//Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introduzca el primero numero"));
var numero2 = parseInt(prompt("Introduzca el segundo numero"));
var resultado = "";

if(numero1 > numero2){
	do{
		numero1--;
		resultado += numero1 + ", ";
	}while(numero1 > numero2)
	alert("Numeros entre numero1 y numero 2: " + resultado);
}else if(numero2 > numero1){
	do{
		numero2--;
		resultado += numero2 + ", ";
	}while(numero2 > numero1)
	alert("Numeros entre numero2 y numero1: " + resultado);
}
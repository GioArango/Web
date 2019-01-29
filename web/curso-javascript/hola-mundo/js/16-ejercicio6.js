'use strict'

//Indicar un numero que diga si es par o impar

var numero = parseInt(prompt("Introduzca un número"));

while(isNaN(numero)){
	numero = parseInt(prompt("Introduzca un número"));	
}

if(numero%2==0){
	alert("El numero introducido es par");
}else{
	alert("El numero introducido es impar");
}
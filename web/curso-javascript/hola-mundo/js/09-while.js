'use strict'

var year = 2018;

while(year <= 2051){
	console.log("Estamos en el año: " + year);

	if(year == 2025){
		break;
	}
	year++;
}

//do while ejecuta primero un bloque de instrucciones y valida una condicion

var years = 20;

do{
	alert("SOLO CUANDO SEA DIFERENTE DE 20");
	years++;
}while(years > 25)
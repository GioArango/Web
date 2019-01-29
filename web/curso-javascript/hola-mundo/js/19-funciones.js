'use strict'

//FUNCIONES
//Es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora(numero1, numero2, operacion){
	//conjunto de instrucciones
	if(operacion == "suma"){
		console.log("Suma: " + (numero1+numero2));		
	}
	if(operacion == "resta"){
		console.log("resta: " + (numero1-numero2));		
	}
	if(operacion == "multiplicacion"){
		console.log("multiplicacion: " + (numero1*numero2));		
	}
	if(operacion == "division"){
		console.log("division: " + (numero1/numero2));		
	}	
}

calculadora(12, 8, "division");
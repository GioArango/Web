'use strict'

//switch
var edad = 18;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Ahora sos mayor de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Eres adulto mayor";
	break;
	case 70:
		imprime = "Eres un anciano";
	break;
	default:
		imprime: "Tu edad es neutra";
	break;
}

console.log(imprime);
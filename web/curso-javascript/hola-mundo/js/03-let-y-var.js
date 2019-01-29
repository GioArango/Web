'use strict' //Sugiere buenas practicas en nuestro codigo


//prueba con var
var numero = 40;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero);
}

console.log(numero);

//prueba con let
var texto = "Curso JS";
console.log(texto);

if(true){
	let texto = "Curso JS con let"; // de esta forma el valor de texto solo será "curso JS con let" en este bloque de codigo
	console.log(texto);
}

console.log(texto);
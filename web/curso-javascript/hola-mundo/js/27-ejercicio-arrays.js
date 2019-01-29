'use strict'
var numeros = new Array(6);

for(var i=0; i<numeros.length; i++){
	numeros[i] = parseInt(prompt("Introduzca un número: "));
}


/*var sorterArray = numeros.sort();
console.log("Array ordenado: " + sorterArray);

var invertArray = numeros.reverse();
console.log("Array invertido: " + invertArray);

console.log("Tamaño del array: " + numeros.length);
document.write("<p>"+ numeros +" </p>")*/

var valorUsuario = parseInt(prompt("Introduzca un valor a buscar"));
buscarValor(valorUsuario);
console.log(valorUsuario);

function buscarValor(valor){
	var busqueda = numeros.some(obje => obje == valor);
	if(busqueda == true){
		alert("El valor encontrado es: " + valor);
		console.log("El valor encontrado es: " + valor);
	}
}

console.log(numeros);

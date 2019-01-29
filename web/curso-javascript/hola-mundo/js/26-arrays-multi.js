'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['Rambo','La vida es bella','Rapido y Furioso'];

peliculas.sort();  //sort ordena de forma alfabetica el array
console.log(peliculas);

peliculas.reverse(); // retorna el array en forma reversada
console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = prompt("Introduce tu pelicula");

while(elemento != "Salir"){
	var elemento = prompt("Introduce tu pelicula");
	if(elemento != "Salir"){
		peliculas.push(elemento); //push agrega un elemento a un array	
	}	
}

var peliculasString = peliculas.join(','); // convertir array en formato texto
console.log(peliculasString);

var cadena = "texto1,texto2,texto3";
var cadenaArray = cadena.split(','); // Convierte cadena separada por algun caracer a array
console.log(cadenaArray);
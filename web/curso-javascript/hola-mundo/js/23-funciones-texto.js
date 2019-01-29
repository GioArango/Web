'use strict'

// tranformacion de textos

var numero = 444;
var texto1 = "Curso JavaScript JavaScript";
var texto2 = "Buen curso";

var dato = numero.toString();
console.log(dato);

dato = texto1.toUpperCase();
console.log(dato);

dato = texto2.toLowerCase();
console.log(dato);


// calcular longitud

console.log(dato.length);

// concatenar - Unir textos

var textoTotal =texto1.concat("#"+texto2);

console.log(textoTotal);

// BUSQUEDAS

//Primera coincidencia
var busqueda = texto1.indexOf("JavaScript");
console.log(busqueda);

//Ultima coincidencia
var busqueda = texto1.lastIndexOf("JavaScript");
console.log(busqueda);


//misma utilidad que indexOf
var busqueda = texto2.search("curso");
console.log(busqueda);


//retorna en un array las coincidencias encontradas
var busqueda = texto2.match("curso");
console.log(busqueda);

var busqueda = texto2.match("curso/g"); // con g hace una busqueda global
console.log(busqueda);


// retorna el resultado a partir de posiciones por ejem de la 5 a la 14
var busqueda = texto2.substr(0,5); // con g hace una busqueda global
console.log(busqueda);


// retorna la letra que esta en la posicion que envio como parametro
var busqueda = texto2.charAt(7); 
console.log(busqueda);


// Valida si la palabra que envio como parametro está al inicio de la variable
var busqueda = texto2.startsWith("Buen"); 
console.log(busqueda);

// Valida si la palabra que envio como parametro está al final de la variable
var busqueda = texto2.endsWith("Buen"); 
console.log(busqueda);


//retorna true o false si una palabra existe en la variable 
var busqueda = texto2.includes("Java"); 
console.log(busqueda);


//Sirve para reemplazar
var busqueda = texto2.replace("Buen","BUenito"); 
console.log(busqueda);

//Sirve para recortar un string
var busqueda = texto2.slice(5); 
console.log(busqueda);

//Retorna la cadena en un array, para acceder a la posicion que yo requiera
var busqueda = texto2.split(" "); 
console.log(busqueda);

//limpia espacios
var busqueda = texto2.trim(); 
console.log(busqueda);
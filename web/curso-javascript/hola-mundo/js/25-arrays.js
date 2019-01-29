'use strict'

var nombres = ['Gio','Arlen','Jhon','Daniel', 10, true, "Cesar"]; // Colección de datos de cualquier tipo

var lenguajes = new Array("PHP","Java","JavaScript","Go");

console.log(nombres);
console.log(lenguajes);

console.log(nombres.length);

document.write("<h1>Nombres: </h1>");
document.write("<ul>");

/*
for(var i = 0; i<nombres.length; i++){
	
	document.write("<li>"+nombres[i]+"</li>");
	console.log("Nombre: " + nombres[i]);
}
*/

lenguajes.forEach((elemento, indice)=>{
	document.write("<li>" + indice +"- "+ elemento + "</li>");
});


for(let lenguaje in lenguajes){ //Otra forma de recorrer el array
	document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");
//var elemento = parseInt(prompt("Que elemento del array quieres?", 0));


/*
if(elemento > nombres.length){
	alert("Introduce un numero menor que " + nombres.length);
}else{
	alert("El nombre correspondiente al elemento seleccionado es " + nombres[elemento]);
}
*/

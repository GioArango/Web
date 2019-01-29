'use strict'

//DOM - Document Object Model

var color = prompt("Ingrese color");

function cambiaColor() {
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto



// var caja = document.getElementById("micaja");// Seleccionar elemento
var caja = document.querySelector("#micaja"); // Seleccionar elemento, esta forma es mas elegante y recomendada. # para seleccionar elemento . para seloeccionar clase

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
cambiaColor();
caja.style.padding = '10px';
caja.style.color = 'white';


var todosLosDiv = document.getElementsByTagName('div'); //Conseguir elementos por su etiqueta
var contenidoEnTexto = todosLosDiv[2].textContent;

var hr = document.createElement("hr"); // crear elementos html

var seccion =  document.querySelector("#misection");
var valor;

for (valor in todosLosDiv) {
    if (typeof todosLosDiv[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto); //append añade despues
       seccion.append(parrafo); // prepend añade antes
    }
}

seccion.append(hr);



//Conseguir elementos por su clase css
var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");

//divAmarillos.style.background = 'yellow';

for(var rj in divRojos){
	if(divRojos[rj].className == "rojo"){
		divRojos[rj].style.background = 'red';
	}
}
console.log(divRojos);
//
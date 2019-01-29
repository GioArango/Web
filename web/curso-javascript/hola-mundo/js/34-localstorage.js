'use strict'

//Localstorage


// Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
	console.log('Localstorage compatible');
}else{
	console.log('Local Storage incompatible');
}

//Guardar datos
localStorage.setItem("titulo", "Curso de symfony");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
	nombre:'Gio Arango',
	email:'gioarango.94@gmail.com',
	web:'gioarango.es'
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem('usuario'));
console.log(userjs);

document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);

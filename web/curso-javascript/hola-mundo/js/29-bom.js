'use strict'

// BOM - Browser object Model
function getBom(){
	console.log(window.innerHeight);
	console.log(window.innerWidth);
	console.log(window.location);
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url2){
	window.open(url2,"","width=400,height=300");
}

getBom();
$(document).ready(function(){
	console.log("Hola");

	//Mover elemento por la pagina
	$(".elemento").draggable();


	//Resimensionamiento
	$(".elemento").resizable();

	//Seleccionar elementos
	//$(".listaSeleccionable").selectable();

	//Ordenar elementos
	$(".listaSeleccionable").sortable();

	$("#area").droppable({
		drop: function(){
			alert("Has soltado algo dentro del area");
		}
	});
	$("#elementomovido").draggable();

	//Efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("explode");
	});
});
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";
        
        //console.log("Se ha cargado el componente videojuego");
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnInit(){
        //console.log("onInit ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy ejecutado!");
    }

    cambiarTitulo(){
        this.titulo = "NUevo titulo del componente";
    }
}
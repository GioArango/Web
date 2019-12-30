import  { Component, OnInit } from '@angular/core';
import { Zapatilla} from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String [];
    public color: string;
    public mi_marca: string = "Fila";
    
    constructor(){
        this.marcas = new Array();
        this.color = 'yellow';
        this.zapatillas = [
            new Zapatilla('Reebok Clasic', 80, 'Reebok', 'Blanco', true),
            new Zapatilla('Adidas Men', 200, 'Adidas', 'Rojo', true),
            new Zapatilla('nike Cortez', 120, 'Nike', 'Blanco', true),
            new Zapatilla('Adidas Yezzy', 280, 'Adidas', 'Gris', false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas)

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice){
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }
}
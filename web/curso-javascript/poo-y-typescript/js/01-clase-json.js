var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color) {
        //bicicleta.color = nuevo_color;
        this.color = nuevo_color; //Acceder a la propiedad color desde el mismo ámbito
    }
};

bicicleta.cambiaColor("Azul");
console.log(bicicleta);
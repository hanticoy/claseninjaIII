//clase ninja III

class NinjaIII {
    nombre
    vida = 100
    velocidad = 3
    fuerza = 3

    constructor (nombre){
        this.nombre = nombre
    }

    sayName(){
        console.log('mi nombre es:' + this.nombre);
    }
    showStats(){
        console.log('nombre:' + this.nombre + ', vida:' + this.vida + ', fuerza:' + this.fuerza + ' y velocidad:' + this.velocidad +' del ninja.');
    }
    drinkSake(){
        this.velocidad = this.velocidad + 10;
    }
}

class Sensei extends NinjaIII {
    sabiduria=10

    constructor(nombre,vida,velocidad,fuerza){
        
        super(nombre,vida,velocidad,fuerza)
        
        this.nombre = nombre
        this.vida = 200  
        this.velocidad = 10
        this.fuerza = 10 
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Lo que puede hacer un programador en un mes, dos programadores lo pueden hacer en dos meses");
    }
}

const ninja = new NinjaIII("Master Splinter");
ninja.sayName()

const superSensei = new Sensei("Master Hugo");
superSensei.speakWisdom();
superSensei.showStats();



class Persona{        
    constructor(n, a, e, s, p, al){        
        this.nombre=n;
        this.apellido=a;
        this.edad=e;
        this.sexo=s;
        this.peso=p;
        this.altura=al;
        this.identificacion=12554849;                
    }
    obtenerIMC =function(x,y){
        let resultado;
        return resultado=x/(y*y);   
    }

  get _identificacion(){
    return this.identificacion;
  }
  desplegarIMC(){    
    console.log(this.obtenerIMC(this.peso,this.altura));
  }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(newNombre){
        this.nombre=newNombre;
    }
    get Edad(){
        return this.edad;
    }
    set Edad(edad){
        this.edad=edad;
    }

    Saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
       // console.log("Hola soy " + this.nombre + "y tengo" + this.edad +"años");
    }

}

class Estudiante extends Persona{
    constructor(nombre, apellido, edad, carrera){
        super(nombre, apellido,edad);
        this.carrera=carrera;
    }
    Saludar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`);
    }
}




let persona1=new Persona("Juan","Perez",20,"m",80,173);
persona1.Saludar();
persona1.desplegarIMC();
let IMC=persona1.obtenerIMC(persona1.peso,persona1.altura);
console.log(IMC);
//persona1.setEdad(30);
/*
console.log(persona1.nombre);
persona1.Saludar();

console.log(persona1._identificacion);

const estudiante1=new Estudiante("Juan","Perez",20,"Ing. Física");
console.log(estudiante1.nombre);
console.log(estudiante1.carrera);
estudiante1.Saludar();

console.log(persona1._identificacion);
console.log(persona1.obtenerIdentificacion(5,5));*/
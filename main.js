class Persona{       
    constructor(nombre, apellido, edad, sexo, peso, altura){
        
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;        
    }
    
    getNombre(){
        return this.nombre;
    }
    setNombre(newNombre){
        this.nombre=newNombre;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edad){
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
    
}


let persona1=new Persona("Juan",20);
persona1.Saludar();
persona1.setEdad(30);
console.log(persona1.nombre);
persona1.Saludar();

const estudiante1=new Estudiante("Juan","Perez",20,"Ing. Física");
console.log(estudiante1.nombre);
console.log(estudiante1.carrera);
estudiante1.Saludar();
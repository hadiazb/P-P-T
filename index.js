class persona {
    constructor(name, lastname, age, identification, weight, height, profetion) {
        this.nombre   = name,
        this.apellido = lastname,
        this.edad     = age,
        this.id       = identification,
        this.peso     = weight,
        this.estatura = height,
        this.carrera  = profetion
    }
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido},  tengo ${this.edad} años y soy ${this.carrera}`)
    }
    IMC() {
        var imc = Math.round( this.peso / Math.pow(this.estatura, 2));
        
        if (imc > 24) {

            document.getElementById('parrafo').innerHTML = `Te recomiendo ${this.nombre} que hagas ejercicio y comas saludable, porque estas en sobrepeso, tu IMC es ${imc}`;
            
        } else {
            
            document.getElementById('parrafo').innerHTML = `Excelente ${this.nombre} estas saludable,  tu IMC es ${imc}, lo que indica que eres una persona sana!!!`;

        }
    }
}

class boy extends persona {

    constructor(name, lastname, age, identification, weight, height, profetion, sex, city) {
        super(name, lastname, age, identification, weight, height, profetion);
        this.genero = sex,
        this.ciudad = city
    }

    saludoDos() {
        console.log(`Saludos de ${this.nombre} una persona muy importate!!!`);
    }
}
var Hugo = new persona('Hugo', 'Diaz', 30, '1016023318', 83, 1.7, 'Ingeniero Mecánico');
var Maria = new boy('Maria', 'Diaz', 3, '10160', 14, .9, 'Infante', 'femenino', 'Bogota');
var Jairo = new persona('Jairo', 'Diaz', 30, '1016023318', 69, 1.7, 'Ingeniero Mecánico');

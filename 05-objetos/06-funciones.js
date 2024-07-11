// las funciones son objetos de 1era clase
// las funciones pueden ser asignadas a otras variables pasadas como argumentos a otras fx o retornadas de otras fx
// tambien tienen propiedades

function Usuario(nombre) {
    this.nombre = nombre
}

console.log(Usuario.name) 
console.log(Usuario.length) 

//.name  devuelve nombre de funcion
//.length // devuelve cantidad de argumentos


//tomar una funcion y asignarla a variable
const U = Usuario
let user = new U("Cris")

console.log(user)

//pasar funcion como argumento

function of (Fn, arg) {
    return new Fn(arg)
}

let user1 = of(Usuario, "Chanchito");
console.log(user1)

//Fn recibe fx, arg de arguemnto y esta fx retorna la Fn(con el arguemnto) y se incluye el new

// retornar fx dentro de otra fx

function returned () {
    return function() {
        console.log("Hola Mundo");
    }
}

let saludo = returned()
saludo()
// funcion constructora
//usa UpperCamelCase o PascalCase

//this palabra reservada
//new palabra reservada, ocurren 4 cosas
// 1ero crea un objeto literal del aire
// 2do vincula el prototipo de la fx (usuario) con el objeto que se va a crear
//3ero el objeto literal del aire se le asigna la palabra reservada this
// this es el objeto vacio que se creo 
// si no retorna nada la funcion automaticamnete retorna this

function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperar clave ...')
    }
}

let usuario = new Usuario()

console.log(usuario)

//metodo es una funcion constructora o factory que fue asignada a una propiedad de un objeto
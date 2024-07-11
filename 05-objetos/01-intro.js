// Funcione es un conjunto de instrucciones
// funcion anonimas son aquellas que no han sido declaradas con un nombre, se omite

// este estilo es programacion orientada a objeto POO o OOP se encapsula datos relacionados entre si 
//acciones que se pueden realizar con este objeto

let user = {
    email: 'user@examplee.com',
    name: 'Cristina',
    direccion: {
        calle: 'Av Siempre Viva',
        numero: 5

    },
    activo: true,
    recuperarClave:
    function () {
console.log('Recuperacion clave ...')
    }

}

const user2 =  {id: 1};

user2.name = 'Crstina';
user2.guardar = function () {
console.log("Guardando", user.name)
}

user2.guardar();

delete user2.name
delete user2.guardar
console.log(user2)

//Object.freeze no deja cambiar propiedad
//Object.seal permite cbiar valores de propiedad, pero la prop esta fija
//const user1 = Object.freeze({id:1})
const user1 = Object.seal({id:1})
user1.name = "Cristina";
user1.id = 2
console.log(user1)

//factory function
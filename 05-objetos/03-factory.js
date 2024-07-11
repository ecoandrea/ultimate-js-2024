//factory function para no tener que repetir codigo
//deben usar camelCase
// no es necesario  escribir valor de propiedad si es la misma


function crearUsuario(name, email) {
    return {
        
        email: email,
        name,
        activo: true,
        recuperarClave: function () {
console.log("recuperando clave ...")
        },
    }
}

let user1 = crearUsuario("Cristina", "cristina@gmail.com")
let user2 = crearUsuario("Andy" , "andy@gmail.com")

console.log(user1, user2)
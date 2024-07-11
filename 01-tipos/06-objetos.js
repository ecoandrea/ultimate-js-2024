//Personaje de tv

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad:16,
};
console.log(personaje.anime);// se accede con punto
console.log(personaje["nombre"]); // o con corchetes

personaje.edad = 14 // modifica 

console.log(personaje.edad)

let llave = "edad";
personaje[llave];

delete personaje.anime; // para eliminar
console.log(personaje)
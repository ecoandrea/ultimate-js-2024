let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop])
}

let animales = ['Perro', 'Pato', 'Pez'];
for (let indice in animales) {
    console.log(indice, animales[indice])
}
//js es dinamico , se quita y agrega propiedades a los objetos
// para listar propiedades (obtener) se usan metodos

const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log("dibujando")
    }
}

//delete punto.dibujar
if("dibujando" in punto) { //se pregunta si existe la propiedaad 
punto.dibujar()
}

//let keys = Object.keys(punto) // es lo mismo usando variable
//console.log(Object.keys(punto))
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave])
}
//otro metodo

for (let entry of Object.keys(punto))  {
console.log(entry)
}

//se deberia usar este, es mas nueva
for (let llave in punto) {
    console.log(llave, punto[llave])
}

//entry permite acceder a la propiedad cuando no sabemos el valor
//keys, entries metodos de clase o estaticos
//valores primitivos string, number, boolean, null, undefined, Symbol y bigint
//valores por referencia son objetos, array, fxs

//es un puntero al lugar exacto donde se encuentra un objeto

let a = 3
let b = a
b++
console.log(a, b)

let c = {}
let d = c

d.prop = 1
console.log(c, d) // se duplica

//cuando se cea una variable , se crea una direccion, el objeto se guarda en otro lugar

let e = 1

function suma(n) {
    n++
}

suma(e)
console.log(e) //1

//cuando se define  parametros js crea una variable especial para ese parametro
//objetos se pasan por referencia

let f = {prop:1}

function suma(n) {
    n.prop++
}

suma(f)
console.log(f) //2

//datos primitivos se copian
//datos de referencia se referencian
//atajo para llamar a constructor de objeto
//crea objeto

let obj = {};
let obj2 = new Object() // constructor

//otros constructors
//new Array(); []
//new String(); "", '', `` tienen valueOf
//new Number(); 12 tb tienen valueOf
//new Boolean(); true false tienen valueOf

function Usuario() {
    this.name = "Canchit Feliz"
}

let user = new Usuario()
console.log(user.constructor)

//typeof de "" = string es literal
//typeof de "string" = "objeto" los envuelve en objeto y de ahi al correr el codigo los saca
//

const s1 = "1 + 1" // devuelve 1 + 1
const s2 = new String('1 + 1') // devuelve {"1 + 1"}
//console.log(eval(s1), eval(s2))
console.log(s2.valueOf()) //1 + 1

//para evitar errores usar string literales cuando se tenga que crear pero si se crean usando el constructor y luego se necesita obtener el valor se usa valueof
function suma(a, b){
    console.log(arguments) // no se recomienda usar arguments como variable
    return  a + b;

}

suma(5, 6);

let resultado = suma(5, 6, 1, 2, 3);

console.log(resultado);
console.log(typeof suma);
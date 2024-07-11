
function getbyIdx (arr, idx) {
    if( idx < 0 || arr.length <= idx){
        return "Elemento no existe";
    }

     return arr[idx]; // se le pasa el idx al arreglo para que pase el elemento
}

let resultado = getbyIdx ([1, 2], 2)
console.log(resultado);
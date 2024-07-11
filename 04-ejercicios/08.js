let array = [{
    id:1,
    name: 'Cristina',
    
},
{
    id:2,
    name: 'Juan',
    
},
{
    id:3,
    name: 'Ana',

},
];

let pares = [
    [1, {id:1, name: "Cristina"}],
    [2, {id:2, name: "Juan"}],
    [3, {id:3, name: "Ana"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
        return pairs;
    }
}
let resultado = toPairs(array); 
    console.log(resultado);
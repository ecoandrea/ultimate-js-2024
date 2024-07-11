let pairs = [
  [1, { name: "Cristina" }],
  [2, { name: "Juan" }],
  [3, { name: "Ana" }],
];

let array = [
  {
    id: 1,
    name: "Cristina",
  },
  {
    id: 2,
    name: "Juan",
  },
  {
    id: 3,
    name: "Ana",
  },
];

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {//para acceder al indice
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);

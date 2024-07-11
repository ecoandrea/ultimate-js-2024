//constructor function 
function Punto(x, y) {
    this.x = x; //va a ser z, y x
    this.y = y;
    this.dibujar = function() {console.log("Dibujando...." );
    }
}

/*
const Point = new Function("x", "y", `
     this.x = x; 
    this.y = y;
    this.dibujar = function() {console.log("Dibujando...." );
    }
    
    `)

    const p = new Point(1, 2)
    console.log(p)
*/

//1er argumento es this
// se usa para extender objetos y otras funciones
//fx de call permite llamar fxs a las cuales se le pasa el contexto de this y asi aumentar los objetos que se le estan pasando
//fx apply argumento que se le pase se tiene que entregar como array

let punto = {z: 7}  // se extiende creando una variable
Punto.call(punto, [1, 2])
Punto. apply
(punto, 1, 2)
console.log(punto)

// se reutiliza codigo definiendo un objeto y se lo pasamos a otra funcion y esta se va a encargar de extenderlo
//funciones pueden se recreadas con constructor de function pero no es lo ideal , mejor usar call o apply
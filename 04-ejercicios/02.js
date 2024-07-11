function nombreResolucion(ancho, alto) {
if (ancho >= 7680 && alto >= 4320 ) {
    return '8k';

} else if  (ancho >= 3840 && alto >= 2160 ) {
    return '4k';
}
 else if  (ancho >= 2560 && alto >= 1440) {
    return 'WQDH';
}
else if  (ancho >= 1920 && alto >= 1080) {
    return 'FHD';
}
else  if (ancho >= 2560 && alto >= 1720) {
    return 'HD';
} else {
    return false
}
}


let nombre = nombreResolucion(2500, 1080)
console.log(nombre)
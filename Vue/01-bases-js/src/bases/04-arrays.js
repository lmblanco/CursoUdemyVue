
const arreglo = [1,2,3,4]
arreglo.push(5)

// OPERADOR SPREAD
// hace un nuevo arreglo basado en el primer arreglo
const arreglo2 = [...arreglo]
arreglo2.push(6)

// el map => recibe una funcion 
// itera cada uno de los elementos del arreglo al que estoy haciendo referencia
// siempre debe retornar algo y siempre sera un arreglo
const arreglo3 = arreglo2.map( function (n) {  
    return n*2
})

arreglo3.push(14)

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);




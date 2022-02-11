
const persona = {
    nombre: 'Tonny',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12333,
    }
}

// OPERADOR SPREAD
// sirve para expandir el objeto sin que sufra alguna modificacion
const persona2 = { ...persona};

// objetos pasados por referencia cualquier modificacion que se haga al objeto principal 
// tambien lo va a tomar el otro objeto
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);








const nombre   = 'Luis'
const apellido = 'Blanco'

// Template String Literals
// Me permite unir dos variables sin tener que colocar entre ellas comillas
const nombreCompleto = `${nombre} ${apellido}`

// console.log(nombreCompleto)

function getSaludo(nombre){
    return 'hola ' + nombre
}


console.log(`Este es un texto: ${ getSaludo(nombre) }`);
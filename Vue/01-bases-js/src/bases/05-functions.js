
// FUNCION NORMAL
// function saludar(nom){
//     return `hola ${nom}`
// }

// FUNCION ANONIMA
// ASIGNANDOLA A UNA VARIABLE
// const saludar = function(nom){
//     return `hola ${nom}`
// }

// FUNCION FLECHA - Forma #1
// const saludar = (nom) => {
//     return `hola ${nom}`
// }

// FUNCION FLECHA - Forma #2
//const saludar = (nom) => `hola ${nom}`

// Pasando valor por defecto
const saludar = (nom ='peter') => `hola ${nom}`

const nom = 'Tonny'

//console.log(saludar());

// Opcion 1
// const getUser = () => {
//     return {
//         id: '12354',
//         username: 'Tonny01'
//     }
// }

// Opcion 2
// Le estamos diciendo que retornara un objeto
const getUser = () => ({id: '12354', username: 'Tonny01'})

console.log(getUser());


const heroes = [
    {
        id: 1,
        name: 'Batman'   
    },
    {
        id: 2,
        name: 'Superman'   
    },
]

// devuelve true o false si lo encontro
const existe = heroes.some( (heroe) => heroe.id === 1);
console.log(existe);

// retorna todo el objeto 
// const existe = heroes.find( (heroe) => heroe.id === 1);
// console.log(existe);

// const { name } = heroes.find( (heroe) => heroe.id === 1);
// console.log(name);




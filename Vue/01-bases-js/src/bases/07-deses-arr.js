

const characters = ['goku','vegeta','trunks','goten']

// NORMAL
// const goku = characters[0]
// const vegeta = characters[1]

// console.log(goku);
// console.log(vegeta);

// DESESTRUCTAR ARREGLOS

//const [goku,vegeta] = characters
const [ , vegeta, t, goten ='sin valor'] = characters

console.log(goten);

/* -------------------------------------*/
// OTRO EJEMPLO DE DESESTRUCTURACION

const returnArray = () => {
    return ['ABC',123]
}

const [ letters, numbers] = returnArray()

console.log(letters, numbers);



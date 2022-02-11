
// DESESTRUCTURACION

const person ={
    name: 'Tonny',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, power = 'sin poder'} = person

//console.log(name, age, power);

const createHero = ({name,age,power}) => 
    ({
        id: 1234656,
        name,
        age,
        power
    })

console.log( createHero(person));

// const createHero = ({name,age,power ='sin poder'}) => `${name} ${age} ${power}`
// console.log( createHero(person));





// IMPORTACIONES
//import { heroes } from './data/heroes'

// ***
import superHeroes from './data/heroes'

//const [ id ] = heroes

//const [id] = superHeroes

const getHeroById = (id) => superHeroes.find( hero => hero.id === id)
console.log(getHeroById(2));

const getHeroByOwner = (owner) => superHeroes.filter( hero => hero.owner === owner)
console.log(getHeroByOwner('DC'));
// console.log(dc);
// console.log(marvel);

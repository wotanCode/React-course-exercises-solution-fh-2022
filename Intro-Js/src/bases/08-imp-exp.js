import { heroes } from '../data/heroes';

console.log('Todos los heroes:',heroes);

// const getHeroesById = (id) => {
//   return heroes.find( (heroe) => {
//     if (heroe.id === id)
//       return heroe.id === id;
//     else 
//       return false  
//   });
// }

const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id);
console.log(getHeroesById(2));

const getHeroesByOwnder = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
console.log(getHeroesByOwnder('DC'));
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

  test('Debe retornar un heroe por id', () => {

    const id = 1;
    const heroe = getHeroeById(id)

    const heroeData = heroes.find( heroes => heroe.id );

    expect(heroe).toEqual(heroeData);

  })

  test('Debe retornar un undefined si el heroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById(id)

    expect(heroe).toBe(undefined);

  })

  test('Debe retnar un arreglo con los heroes de DC', () => {
    //toEqual
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );

    const heroesData = heroes.filter(h => h.owner === owner)

    expect( heroes ).toEqual(heroesData);

  })

  test('debe de retonar un arreglo con los heroes de marvel', () => {
    //toEqual
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    expect(heroes.length).toBe(2);

  })

})
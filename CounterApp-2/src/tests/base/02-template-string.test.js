import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string', () => {
  test('Pueba en el metodo getSaludo', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo( nombre );

    expect(saludo).toBe('Hola ' + nombre);

  })

  //get saludo debe retornar hola carlos si no hay argumento en nombre
    test('Pueba en el metodo getSaludo', () => {
      const saludo = getSaludo();
  
      expect(saludo).toBe('Hola Carlos!');
  
    })



})
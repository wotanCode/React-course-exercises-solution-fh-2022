import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {

    const usuarioTEST = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(usuarioTEST)
  })


    //Tarea: getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => {

      const nombre = 'Pedro'
      const user = getUsuarioActivo(nombre);
  
      expect(user).toEqual({
        uid: 'ABC567',
        username: nombre
      });

  })
})
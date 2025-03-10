import { getImagen } from "../../base/11-async-await";

describe('Pruebas con asynz-await y fetch', () => {

  test('Debe retornar el url de la imagen', async () => {

    const url = await getImagen();

    //expect( typeof url ).toBe( 'string' ); //para cualquier string
    //expect( url.includes('http:// ') ).toBe( true ); //para la url

  })
})
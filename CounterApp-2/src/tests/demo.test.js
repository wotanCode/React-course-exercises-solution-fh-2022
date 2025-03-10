// test('Debe de ser true', () => {

//   const isActive = true;

//   if (isActive){
//     throw new Error('No esta activo');
//   }

// })

describe('Pruebas en el archivo demo.test.js', () => {

  test('Deben de ser iguales los strings', () => {
  
    //1- Inicializacion
    const mensaje = 'Hola mundo';
  
    //2- Estimulo
    const mensaje2 = `Hola mundo`;
  
    //3- comportamiento
    expect(mensaje).toBe(mensaje2); //esto compara ===
    
  
  })

})

//import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";

//FC funcional components
const PrimeraApp = ( {saludo, subtitulo } ) => {

  //const saludo = 'hola mundo'; //Valido
  // const saludo = 123; //Valido
  // const saludo = 123.2; //Valido
  // const saludo = true; //inValido
  // const saludo = [1,2,3,4,5] //Valido
  // const saludo = {
  //   nombre: 'hola',
  //   edad: 31,
  // }; //valido pero solo si usamos JSON.Stringify

  console.log(saludo)

  return (
    <>
      {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
      <h1>{saludo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

PrimeraApp.protoType = {
  saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;
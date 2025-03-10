import React from "react";
//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'
import "@testing-library/jest-dom"


describe('Pruebas en <Priemrapp />', () => {
  //test('Debe de mostrar el mensaje "Hola soy pedrito"', () =>{
    //EN eto tampoco funcionaria en enzy
    // const saludo = "Hola soy pedrito";
    // const wrapper = render(<PrimeraApp saludo={saludo} />)

    //esto hubiera sido otra forma de hacerlo
    //const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //Abajo hubiera quedado
    //expect( getByText(saludo) )
    //Esto ya no funciona en enzy
    //expect( wrapper.getByText(saludo) ).toBeInTheDocument();

    test('Debe de mostrar <PrimeraApp/> correctamente"', () =>{
    const saludo = "Hola soy pedrito"
    const wrapper = shallow(<PrimeraApp saludo= {saludo}/>)

    expect( wrapper ).toMatchSnapshot();
  })

    test('Debe de mostrar el subtitulo enviado por props)', () => {
      const saludo = "Hola soy pedrito"
      const subtitulo ="Soy un subtitulo"
      const wrapper = shallow(
        <PrimeraApp
          saludo = {saludo}
          subtitulo = {subtitulo}
        />
      );

      const textoParrafo = wrapper.find('p').text();
      expect(textoParrafo).toBe(subtitulo);

    })
})
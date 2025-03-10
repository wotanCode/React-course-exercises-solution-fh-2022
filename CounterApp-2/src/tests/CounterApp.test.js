import React from "react";
import PrimeraApp from "../CounterApp";
import {shallow} from 'enzyme'
import "@testing-library/jest-dom"

describe('Pruebas en componente counterApp', () => {

  let wrapper = shallow(<PrimeraApp />)

  beforeEach( () => {
    wrapper = shallow(<PrimeraApp />)
  })

  test('Prebas de integracion', () =>{

    const valor = '31';
    const wrapper = shallow(<PrimeraApp value={valor}/>)

    expect( wrapper ).toMatchSnapshot();
    
  });

  test('Pruebas de valor, debe retornar 100', () => {
    const valor = '100';
    const wrapper = shallow(<PrimeraApp value={valor}/>)

    const numeroValor = wrapper.find('h2').text().trim();

    expect(numeroValor).toBe(valor);
  });

  test('Debe de incrementar con +1', () =>{
    //const btn1 = wrapper.find('button').at(0).simulate('cliCk');
    //console.log(btn1)
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    //console.log(counterText);
    expect(counterText).toBe('11')
  });
  test('Debe de incrementar con -1', () =>{
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('9')
  });

  test('Debe quedar en cero', () =>{
    const wrapper = shallow(<PrimeraApp value={105}/>)
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    
    expect(counterText).toBe('0')
  });
});
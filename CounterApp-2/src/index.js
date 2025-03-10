import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divROOT = document.querySelector('#root');


//ReactDOM.render( <PrimeraApp saludo={'Hola soy pedrito'} /> , divROOT)
 ReactDOM.render( <CounterApp value={10} /> , divROOT)
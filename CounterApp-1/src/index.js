import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divROOT = document.querySelector('#root');

ReactDOM.render( <CounterApp value={31} /> , divROOT)
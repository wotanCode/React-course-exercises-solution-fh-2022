import React from 'react';
import ReactDOM from 'react-dom/client';

//Secion 09 profundizando en hooks
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayaoutEffect/Layout';
// import { Memorize } from './components/06- Memos/Memorize';
// import { MemoHook } from './components/06- Memos/MemoHook';
// import { CallbackHook } from './components/06- Memos/CallbackHook';
// import { Padre } from './components/07-TareaMemo/Padre';
// import './components/08-useReducer/Intro-reducer.js'; //Solo para reducers

//Seccion 10 useReducer
// import { TodoApp } from './components/08-useReducer/TodoApp';

//Seccion 11 useContext
import { MainApp } from './components/09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainApp />
);
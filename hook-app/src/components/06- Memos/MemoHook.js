import '../02-useEffect/effects.css'
import {useCounter} from '../hooks/useCounter';
import { useMemo, useState } from 'react';
import { procesoPesao } from '../../helpers/procesoPesao';

export const MemoHook = () => {

  const { counter, increment } = useCounter(5000)

  const [show, setShow] = useState(true);


  const memoProcesoPesao = useMemo(() => procesoPesao(counter), [counter])


  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small> </h3>
      <hr/>

      <p> {memoProcesoPesao} </p>

      <button 
        onClick={increment}
        className='btn btn-primary'
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary ml-3'
        onClick= {() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>

    </div>
  )
}
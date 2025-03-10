import './Layout.css';
import { useFetch } from '../hooks/useFetch';
import {useCounter} from '../hooks/useCounter';
import { useLayoutEffect, useRef, useState } from 'react';

//const URL = 'https://www.breakingbadapi.com/api/quotes/1'

export const Layout = () => {

  const {counter, increment} = useCounter(1)
  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {quote} = !!data && data[0];
  const [boxsize, setBoxsize] = useState(0);

  const pTag = useRef();

  useLayoutEffect( () => {
    console.log(pTag.current.getBoundingClientRect());
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);

  useCounter(quote);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>

          <blockquote className='blockquote text-right'>
          <p
            ref={pTag}
            className='mb-1'
          >
            {quote}
          </p>
  
        </blockquote>

        <pre> 
          {JSON.stringify(boxsize, null, 3)}
        </pre>


      <button onClick={increment} className='btn btn-primary'>
        siguiente quote
      </button>

    </div>
  )
};
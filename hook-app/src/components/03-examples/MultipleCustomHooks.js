import '../02-useEffect/effects.css';
import { useFetch } from '../hooks/useFetch';
import {useCounter} from '../hooks/useCounter';

//const URL = 'https://www.breakingbadapi.com/api/quotes/1'

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1)

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {quote, author} = !!data && data[0];

  useCounter(quote);


  return (
    <div>
      <h1>BreakingBad quotes</h1>
      <hr/>
      {
        loading ? (
        <div className='alert alert-info text-center'>
          loading...
        </div>
        ) : (
          <blockquote className='blockquote text-right'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
        )
      }

      <button onClick={increment} className='btn btn-primary'>
        siguiente quote
      </button>

    </div>
  )
};
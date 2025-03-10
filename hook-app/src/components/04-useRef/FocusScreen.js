import { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    //document.querySelector('input').select(); //Forma tradicional
    inputRef.current.select();
    console.log(inputRef.current);
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr/>

      <input
        ref= {inputRef}
        className="form-control"
        placeholder='Su nombre'
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}
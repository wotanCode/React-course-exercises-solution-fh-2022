import { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(()=> {
    // console.log('useEffect incial')
  }, []);

  useEffect(()=> {
    // console.log('useEffect cambio')
  }, [formState]);

  useEffect(()=> {
    // console.log('useEffect email cambio')
  }, [email]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className='form-group'>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className='form-control'
          placerholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          className='form-control'
          placerholder='youremail@email.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        {name ==='123' && <Message/>}

      </div>
    </>
  )
}
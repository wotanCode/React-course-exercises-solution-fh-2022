
import './effects.css'
import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  // const handleInputChange = ({target}) => {
  //   setFormState({
  //     ...formState,
  //     [target.name]: target.value
  //   })
  // }

  useEffect(() => {
    console.log('email cambio');
  },[email]);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formValues);
}

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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

        <label>Password</label>
        <input
          type="password"
          name="password"
          className='form-control'
          placerholder='password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />

      </div>

      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}
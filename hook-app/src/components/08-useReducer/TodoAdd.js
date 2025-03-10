import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    handleAddTodo(newTodo)
    reset();

  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleAddSubmit}>

        <div className='form-group'>
          <input
            type='text'
            name='description'
            className='form-control'
            placeholder='Agregar T'
            autoComplete='off'
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <button
          type='submit'
          className='btn btn-outline-primary mt-1 btn-block'
        >
          Agregar
        </button>

      </form>
    </>
  );
}
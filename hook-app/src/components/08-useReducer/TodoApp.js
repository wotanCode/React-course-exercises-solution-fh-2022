import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {

    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'Toggle',
      payload: todoId,
    });
  }

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action);

  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>

          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />

        </div>

        <div className='col-5'>
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />

        </div>
      </div>
    </div>
  )
}
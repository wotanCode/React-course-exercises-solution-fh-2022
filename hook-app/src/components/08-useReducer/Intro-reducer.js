console.log('hola mundo');

const initialState = [{
  id: 1,
  todo: 'Hacer la compra',
  done: false,
}];

const todoReducer = (state=initialState, action) => {

  if (action?.type === 'Agregar') {
    return [...state, action.payload];
  }
  return state
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
}

const agregarTodoAction = {
  type: 'Agregar',
  payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction )

console.log(todos);
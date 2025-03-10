import { TodoListItem } from "./TodoListItem";


export const TodoList = ({
  todos,
  handleToggle,
  handleDelete
}) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, idx) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          idx={idx}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}
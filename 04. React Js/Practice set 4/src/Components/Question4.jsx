import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoList = ({ todoItems }) => {
  const [todos, setTodos] = useState(todoItems);
  const taskDone = (isDone) => {
    return isDone ? "line-through" : "";
  }
  const deleteItem = (itemId) => {
    const newTodo = todos.filter(({id}) => id !== itemId );
    setTodos(newTodo);
  }
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index} className={`mb-2 ${taskDone(item.isDone)}`}>
            {item.task} <button onClick={() => deleteItem(item.id)} className="bg-white">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default TodoList;
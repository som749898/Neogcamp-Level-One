import { useState } from "react";

/* eslint-disable react/prop-types */
const NewTodoList = ({ todoItems }) => {
  const [todos, setTodos] = useState(todoItems);
  const taskDone = (isDone) => {
    return isDone ? "line-through text-red-500" : "";
  }
  const deleteItem = (itemId) => {
    const newTodo = todos.map((item) => item.id === itemId ? {...item, isDone: !item.isDone} : item  );
    setTodos(newTodo);
  }
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index} className={`mb-2 ${taskDone(item.isDone)}`}>
            {item.task} <button onClick={() => deleteItem(item.id)} className="bg-white text-black">{item.isDone ? "Mark as not Done" : "Mark as Done"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default NewTodoList;
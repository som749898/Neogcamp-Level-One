/* eslint-disable react/prop-types */
const Todo = ({ todoItems }) => {
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      {todoItems.map((item, index) => (
        <div className={item.isCompleted ? "text-green-500 mb-4" : "text-red-500 mb-4"} key={index}>
          <h3 className="text-lg font-medium">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
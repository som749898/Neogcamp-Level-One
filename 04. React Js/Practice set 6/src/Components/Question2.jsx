import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/todos') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            todos: [
              {
                title: 'Go Outside',
                desc: 'lorem ipsum dolor sit amit',
                todos: ['shopping', 'cricket', 'walking'],
              },
              {
                title: "Let's Work",
                desc: 'lorem ipsum dolor sit amit',
                todos: ['Feature update', 'Team Meet', 'Code Walkthrough'],
              },
              {
                title: 'Home Work',
                desc: 'lorem ipsum dolor sit amit',
                todos: ['Fix tap', 'Wedding function'],
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Todo list not found.',
        })
      }
    }, 2000)
  })
}

export const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTodo = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setTodos(result.data.todos);
      setLoading(false);
    } catch (error) {
      setTodos(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodo("https://example.com/api/todos");
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
    <ul>
      {
        !loading ? todos.length !== 0 && typeof todos !== "string" ? todos.map((todo,index) => <li key={index}>
          <h2 className="text-xl font-semibold">{todo.title}: {todo.desc}</h2>
          <ol>
            {
              todo.todos.map((item,index) => <li key={index}>
                {item}
              </li>)
            }
          </ol>
        </li>) : <div>{todos}</div> : <div>Loading ...</div>
      }
    </ul>
  </div>
}
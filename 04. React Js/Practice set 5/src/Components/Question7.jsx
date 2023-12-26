import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/comments') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            comments: [
              {
                name: 'Raju',
                text: 'Hello how are you long time no see!!!',
              },
              { name: 'Pankaj', text: 'Party when??' },
              { name: 'Sakshi', text: 'Where are you currently staying' },
              { name: 'Kishore', text: 'Hello Buddy!!' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No comments Found',
        })
      }
    }, 2000)
  })
}

export const Comments = () => {
  const [comments , setComments] = useState([]);
  const [loading , setLoading] = useState(false);
  const fetchComments = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setComments(result.data.comments);
      setLoading(false);
    } catch (error) {
      setComments(error.message);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchComments("https://example.com/api/comments");
  },[]);

  const clickHandler = (ind) => {
    const newComments = comments.filter((comment, index) => index !== ind);
    setComments(newComments);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Comments</h2>
    <ul>
      {
        !loading ? comments.length !== 0 && typeof comments !== "string" ? comments.map((comment,index) => <li key={index}>
          <h2 className="text-xl font-semibold mt-4">{comment.name}</h2>
          <div>{comment.text}</div>
          <button onClick={() => clickHandler(index)} className="text-white mt-1">delete</button>
        </li>) : <div>{comments}</div> : <div>Loading comments ....</div>
      }
    </ul>
  </div>
}
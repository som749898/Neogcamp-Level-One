import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Saroj',
              image:
                'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
              likes: 500,
              comments: 10,
            },
            {
              name: 'Meeta',
              image:
                'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
              likes: 200,
              comments: 1,
            },
            {
              name: 'Alia',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 100,
              comments: 5,
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users data not found.',
        })
      }
    }, 2000)
  })
}

export const UsersFeed = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProfile = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      if(error.status === 404) {
        setUsers(error.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchProfile("https://example.com/api/users");
    console.log("user", users);
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">User Feeds</h2>
    <ul>
      {
        !loading ? users.length !== 0 && typeof users !== "string" ? users.map((item, index) => <li key={index}>
        <img src={item.image} height={300} width={300} alt="flowers" />
        <h2 className="font-bold">{item.name}</h2>
        <div>Likes: {item.likes}</div>
        <div className="mb-2">Comments: {item.comments}</div>
      </li>) : <div>{users}</div> : <div>Loading...</div>
      }
    </ul>
  </div>
}
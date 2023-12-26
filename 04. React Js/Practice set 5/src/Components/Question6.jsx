import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/userchat') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Alia',
              messages: [
                {
                  from: 'Alia',
                  message: 'Good Morning',
                },
                {
                  from: 'Ranvir',
                  message: 'Good Morning, How are you?',
                },
              ],
            },
            {
              name: 'Jeena',
              messages: [
                {
                  from: 'Jeena',
                  message: 'When is the meeting scheduled?',
                },
                {
                  from: 'Seema',
                  message: 'It is at 10AM tomorrow.',
                },
              ],
            },
            {
              name: 'Abhay',
              messages: [
                {
                  from: 'Abhay',
                  message: 'Have you found a house yet?',
                },
                {
                  from: 'John',
                  message: 'No luck yet, still searching.',
                },
                {
                  from: 'Abhay',
                  message:
                    'Hey, an apartment just got vacant in my bulding. Do you wanna have a look?',
                },
              ],
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users chat not found.',
        })
      }
    }, 2000)
  })
}

export const UserChats = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchChats = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      if(error.status === 404) {
        setLoading(false);
        setUsers(error.message);
      }
    }
  }

  useEffect(() => {
    fetchChats("https://example.com/api/userchat");
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">User Chats</h2>
    <ul>{
      !loading ? users.length !== 0 && typeof users !== "string" ? users.map((user, index) => <li key={index}>
        <h2 className="text-xl font-semibold mt-4">{`${user.name}'s chats`}</h2>
        <ul>
          {
            user.messages.map(({from, message},index) => <li key={index}>
              <li>
                <span className="text-l font-semibold mb-4">{from}</span>: {message}
              </li>
            </li>)
          }
        </ul>
      </li>) : <div>{users}</div> : <div>Loading Chats…</div>
    }</ul>
  </div>
}
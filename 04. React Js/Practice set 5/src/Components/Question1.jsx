import { useEffect } from "react";
import { useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}

const UserStatusComponent = () => {
  const [users, setUsers] = useState([]);

  const newUser = async (url) => {
    try {
      const result = await fakeFetch(url);
      if(result.status === 200) {
        setUsers(result.data.users);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    newUser("https://example.com/api/users/status");
  },[]);

  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Status</h2>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className={`mb-2 ${
              user.status === 'Online' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {user.name} - {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserStatusComponent;
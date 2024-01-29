import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 555-555-5555',
            address: {
              street: '123 Main St',
              suite: 'Suite 456',
              city: 'Anytown',
              zipcode: '12345',
            },
          },
        })
      } else {
        reject({
          status: 404,
          message: 'User not found.',
        })
      }
    }, 2000)
  })
}

export const User = () => {
  const [user , setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setUser(result.data);
      setLoading(false);
    } catch (error) {
      setUser(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData('https://example.com/api/user');
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-4">User Data</h2>
  {
    !loading ? typeof user !== 'string' ? <div>
      <div>Name: {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Phone number : {user.phone}</div>
      <button onClick={() => setDisplay(prev => !prev)} className="text-white mt-2">{display ? "Hide Address" : "Show Address"}</button>
      {
        display && <div>
          <div>{user.address.street}</div>
          <div>{user.address.suite}</div>
          <div>{user.address.city}</div>
          <div>{user.address.zipcode}</div>
        </div>
      }
    </div> : <div>{user}</div> : <div>Loading ... </div>
  }
</div>

}
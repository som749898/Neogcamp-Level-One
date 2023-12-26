import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'Saroj',
            image:
              'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
            likes: 500,
            comments: 10,
          },
        })
      } else {
        reject({
          status: 404,
          message: 'user data not found.',
        })
      }
    }, 2000)
  })
}

export const UserProfile = ({heading, width, height}) => {
  const [items, setItems] = useState({});
  const fetchImage = async(url) => {
    try {
      const result = await fakeFetch(url);
      setItems(result.data);
    } catch (error) {
      if(error.status === 404) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchImage("https://example.com/api/user");
  }, [])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{heading}</h2>
    {
      Object.keys(items).length !== 0 ?  <div>
      <img src={items.image} height={height} width={width} alt="flowers" /><div>Name: {items.name}</div><div>Likes: {items.likes}</div><div>Comment: {items.comments}</div>
      </div> : ""
    }
  </div>
}

UserProfile.propTypes = {
  heading: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
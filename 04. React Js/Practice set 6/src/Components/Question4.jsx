import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/videos') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            videos: [
              {
                title: 'The Power of Habit',
                thumbnail: 'https://picsum.photos/200/130',
                views: 1000000,
                likes: 50000,
              },
              {
                title: 'How to Code in JavaScript',
                thumbnail: 'https://picsum.photos/200/135',
                views: 500000,
                likes: 25000,
              },
              {
                title: '10 Minute Yoga for Beginners',
                thumbnail: 'https://picsum.photos/200/131',
                views: 250000,
                likes: 15000,
              },
              {
                title: 'Introduction to Machine Learning',
                thumbnail: 'https://picsum.photos/200/132',
                views: 100000,
                likes: 10000,
              },
              {
                title: 'The Science of Cooking',
                thumbnail: 'https://picsum.photos/200/133',
                views: 75000,
                likes: 5000,
              },
              {
                title: 'The Art of Public Speaking',
                thumbnail: 'https://picsum.photos/200/134',
                views: 50000,
                likes: 2500,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Videos not found.',
        })
      }
    }, 2000)
  })
}

export const PlayList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchVideos = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setVideos(result.data.videos);
    } catch (error) {
      setLoading(false);
      setVideos(error.message);
    }
  }
  useEffect(() => {
    fetchVideos("https://example.com/api/videos");
  },[]);
  const deleteHandler = () => {
    const newPlaylist = videos.filter((video,index) => index !== 0);
    setVideos(newPlaylist);
  }
  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">PlayList</h2>
    {
      !loading ? videos.length !==0 && typeof videos !== "string" ? videos.map((video,index) => <div className="inline-block m-2" key={index}>
        <img height={300} width={300} className="m-auto" src={video.thumbnail} alt="video" />
        <h2 className="text-xl font-semibold">{video.title}</h2>
        <div>Likes: {video.likes}</div>
        <div>Views: {video.views}</div>
      </div>) : <div>{videos}</div> : <div>Loading ...</div>
    }
    <button onClick={deleteHandler} className="text-white block m-auto mt-2">Delete video</button>
  </div>
}
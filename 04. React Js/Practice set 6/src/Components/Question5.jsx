import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/posts') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            posts: [
              {
                caption: 'Delicious chocolate cake recipe',
                src: 'https://picsum.photos/300/301',
                views: 1000,
                likes: 100,
                category: 'Bakery',
              },
              {
                caption: '5-minute breakfast ideas',
                src: 'https://picsum.photos/300/300',
                views: 500,
                likes: 50,
                category: 'Food',
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: 'https://picsum.photos/300/302',
                views: 2000,
                likes: 200,
                category: 'Bakery',
              },
              {
                caption: '10 DIY home decor ideas',
                src: 'https://picsum.photos/300/303',
                views: 100,
                likes: 10,
                category: 'DIY',
              },
              {
                caption: 'Healthy snacks for work',
                src: 'https://picsum.photos/300/304',
                views: 300,
                likes: 30,
                category: 'Food',
              },
              {
                caption: 'How to make sourdough bread at home',
                src: 'https://picsum.photos/300/305',
                views: 1500,
                likes: 150,
                category: 'Bakery',
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Post not found.',
        })
      }
    }, 2000)
  })
}

export const ShowBakery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBakery = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setPosts(result.data.posts);
    } catch (error) {
      setPosts(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBakery("https://example.com/api/posts");
  },[])

  const clickHandler = () => {
    const newPosts = posts.filter(post => post.category === "Bakery");
    setPosts(newPosts);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">PlayList</h2>
    {
      !loading ? posts.length !== 0 && typeof posts !=="string" ? posts.map((post,index) => <div className="inline-block m-3" key={index}>
        <img className="m-auto" src={post.src} alt="post" />
        <h2 className="text-xl font-semibold">{post.caption}</h2>
        <div>Likes : {post.likes}</div>
        <div>Views: {post.views}</div>
      </div>) : <div>{posts}</div> : <div>Loading ...</div>
    }
    <button onClick={clickHandler} className="text-white">Show Bakery</button>
  </div>
}
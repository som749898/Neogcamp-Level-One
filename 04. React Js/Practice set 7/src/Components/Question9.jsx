import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40, rating: 4.5 },
              { name: 'Sketchpens', price: 110, quantity: 20, rating: 3.8 },
              { name: 'Eraser', price: 20, quantity: 20, rating: 4.2 },
              { name: 'Sharpener', price: 22, quantity: 30, rating: 4.7 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Product list not found.',
        })
      }
    }, 2000)
  })
}

export const SortRating = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedArray , setSortedArray] = useState([]);

  const fetchData = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setProducts(result.data.products);
    } catch (error) {
      setLoading(false);
      setProducts(error.message);
    }
  }

  useEffect(() => {
    fetchData("https://example.com/api/products");
  },[])

  const changeHandler = (input) => {
    const newArray = products.filter(item => item.name.toLowerCase().includes(input));
    setSortedArray(newArray);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Products</h2>
    {
      !loading ? products.length !== 0 && typeof products !== 'string' ? <div>
        <input onChange={(e) => changeHandler(e.target.value)} type="text" className="bg-white p-1" placeholder="Search" />
        {
          (sortedArray.length !== 0  ? sortedArray : products).sort((a,b) => b.rating - a.rating).map((item, index) => <li className="border-black border m-1 p-1" key={index}>
            <div>{item.name}</div>
            <div>Price - {item.price}</div>
            <div>Quantity - {item.quantity}</div>
            <div>Rating - {item.rating}</div>
          </li>)
        }
      </div> : <div>{products}</div> : <div>Loading ....</div>
    }
  </div>
}
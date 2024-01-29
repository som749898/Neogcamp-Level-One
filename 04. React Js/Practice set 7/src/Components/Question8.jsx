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
              {
                name: 'Product 1',
                description: 'This is the first product',
                price: 25.99,
                quantity: 10,
              },
              {
                name: 'Product 2',
                description: 'This is the second product',
                price: 19.99,
                quantity: 15,
              },
              {
                name: 'Product 3',
                description: 'This is the third product',
                price: 35.5,
                quantity: 5,
              },
              {
                name: 'Product 4',
                description: 'This is the fourth product',
                price: 49.99,
                quantity: 20,
              },
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

export const SortProducts2 = () => {

  const [products, setProducts] = useState([]);
  const [loading,  setLoading] = useState(false);
  const [original, setOriginal] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setProducts(result.data.products);
      setOriginal(result.data.products);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setProducts(error.message);
    }
  }

  useEffect(() => {
    fetchData("https://example.com/api/products");
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Products</h2>
    {
      !loading ? products.length !== 0 && typeof products !== 'string' ? <div>
        {
          products?.map((item,index) => <li key={index}>
            <h2>{item.name}</h2>
            <div>{item.description}</div>
            <div>${item.price}</div>
            <div>Quantity: {item.quantity}</div>
          </li>)
        }
        <button onClick={() => setProducts(prev => [... prev].sort((a,b) => a.price - b.price))} className="bg-white mr-1">Low to High</button>
        <button onClick={() => setProducts(original)} className="bg-white mr-1">Reset</button>
        <button onClick={() => setProducts(prev => [... prev].sort((a,b) => b.price - a.price))} className="bg-white mr-1">High to to Low</button>
      </div> : <div>{products}</div> : <div>Loading ...</div>
    }
  </div>
}
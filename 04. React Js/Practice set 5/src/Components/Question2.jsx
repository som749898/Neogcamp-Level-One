import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}

export const StationaryItems = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async(url) => {
    try {
      const result = await fakeFetch(url);
      console.log("result", result);
      setItems(result.data.products);
    } catch (error) {
      if(error.status) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchItems("https://example.com/api/products");
  }, []);

  const clickHandler = () => {
    const newItems = items.filter(({quantity}) => quantity > 20);
    setItems(newItems);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      {
        items.length !==0 ? <>
          <button onClick={clickHandler} className="text-white">Show product with quantity more than 20</button>
          <ul>{
            items.map(({name, price, quantity}, index) => <li key={index}>
              {name} - Rs. {price} - Quantity: {quantity}
            </li>)
          }</ul>
        </> : ""
      }
  </div>
}
import { useState } from "react"
import { useEffect } from "react"

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
                name: 'Shoes',
                price: 3000,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/200/200',
              },
              {
                name: 'Tshirt',
                price: 500,
                inStock: false,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/201/201',
              },
              {
                name: 'Trekking Bag',
                price: 2000,
                inStock: true,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/205/205',
              },
              {
                name: 'Trekking Bag',
                price: 2000,
                inStock: true,
                desc: 'lorem ipsum dolor sit amit',
                src: 'https://picsum.photos/205/205',
              },
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

export const ShowItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState({});
  const fetchItems = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setItems(result.data.products);
      setLoading(false);
    } catch (error) {
      setItems(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems("https://example.com/api/products");
  },[]);

  const clickHandler = (itemName) => {
    const newItem = items.find(item => item.name === itemName);
    console.log("new Items", newItem);
    setDisplay(newItem);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Item Details</h2>
    {
      !loading ? items.length !== 0 && typeof items !== "string" ? [...new Set(items.map(item => item.name))].map((item,index) => <button onClick={() => clickHandler(item)} key={index} className="text-white mr-2">{item}</button>) : <div>{items}</div> : <div>Loading...</div>
    }
    <div>
      {
        Object.keys(display).length !== 0 ? <div>
          <img className="mt-3 m-auto" src={display.src} alt="item" />
          <h2 className="text-xl font-semibold">Name - {display.name}</h2>
          <div>Price - {display.price}</div>
          <div>Description - {display.desc}</div>
        </div> : ""
      }
    </div>
  </div>
}
import { useState } from "react";

/* eslint-disable react/prop-types */
const ItemList = ({ itemList }) => {
  const [fruits, setFruits] = useState(itemList);
  const styleFruits = (category) => {
    if(category === "Fruit")
      return "mb-2 text-orange-300"
    else if(category === "Vegetable")
      return "mb-2 text-yellow-300"
    else
      return "mb-2 text-black"
  }
  const filterItems = (itemCategory) => {
    const newFruits = itemCategory === "All" ? itemList : itemList.filter(item => item.category === itemCategory);
    console.log("Fruits", fruits);
    setFruits(newFruits);
  }
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4">Item List</h2>
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          onClick={() => filterItems("All")}
        >
          All
        </button>
        {
          [...new Set(itemList.map((item) => item.category))].map((item,index) => <button onClick={() => filterItems(item)} className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none" key={index}>
            {item}
          </button>)
        }
      </div>
      <ul>
        {fruits.map(({name, category}, index) => (
          <li key={index} className={styleFruits(category)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
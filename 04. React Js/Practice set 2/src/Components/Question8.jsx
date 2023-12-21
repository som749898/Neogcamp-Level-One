/* eslint-disable react/prop-types */
import { useState } from "react";
const MyGadgets = ({ products }) => {
  const [highlight, setHighlight] = useState(false);
  const styleFunction = (product) => {
    return product.price >= 50000 && highlight ? "bg-green-200 p-2" : "";
  }
  return (
    <div className="bg-gray-200 text-black p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Gadgets</h2>
      <ol className="list-decimal">
        {/* Products will be displayed here */}
        {products.map((product, index) => (
          <li key={index} className={`mb-4 ${styleFunction(product)}`}>
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500">{product.price}</p>
          </li>
        ))}
      </ol>
      {/* Button to highlight expensive gadgets */}
      <button onClick={() => setHighlight(prev => !prev)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 focus:outline-none">
        Highlight Expensive Gadget
      </button>
    </div>
  );
};

export default MyGadgets;
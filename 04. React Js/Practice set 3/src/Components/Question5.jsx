/* eslint-disable react/prop-types */
import { useState } from "react";

const VegetableList = ({ vegetables }) => {
  const [date, setDate] = useState("");
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4">Vegetable List</h2>
      <ol className="list-decimal">
        {/* Vegetable list with pick date will be displayed here */}
        {
          vegetables.map(({name, pickDate}, index) => <li className={pickDate === date ? "text-green-500 m-3" : "text-black m-3"} key={index}>
            <p>{name}</p>
            <p>{pickDate}</p>
          </li>)
        }
      </ol>
      {/* Button to highlight fresh vegetables */}
      <button onClick={() => setDate("2023-03-30")} className="bg-green-500 text-white px-4 py-2 rounded mt-4 focus:outline-none">
        Highlight Fresh Vegetables
      </button>
    </div>
  );
};

export default VegetableList;
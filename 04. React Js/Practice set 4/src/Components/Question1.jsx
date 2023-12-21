/* eslint-disable react/prop-types */
import { useState } from "react";

const TabComponent = ({characters}) => {
  const [cast, setCast] = useState("");
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Character Tab</h2>
      <div className="flex space-x-4">
        <button onClick={() => setCast("heroes")} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">
          Show Heroes
        </button>
        <button onClick={() => setCast("villains")} className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none">
          Show Villains
        </button>
      </div>
      <div className="mt-4 w-96">
        {/* Display list of heroes or villains based on the button clicked */}
        {
          cast?.length !== 0 ? characters[cast].map(({name, powers, costume}, index) => <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <div className="text-gray-700 mb-2">Powers: {powers}</div>
          <div className="text-gray-700">Costume: {costume}</div>
        </div>) : ""
        }
      </div>
    </div>
  );
};

export default TabComponent;
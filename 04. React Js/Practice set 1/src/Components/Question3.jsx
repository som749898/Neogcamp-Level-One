/* eslint-disable react/prop-types */
const StationeryList = ({ header, items }) => {
  console.log("items", items)
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4">{header}</h2>
      <ul>
        {/* Items will be mapped and displayed here */}
        {items.map((item, index) => (
          <li key={index} className="bg-white text-black shadow p-2 mb-2 rounded-md">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationeryList;
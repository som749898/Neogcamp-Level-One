/* eslint-disable react/prop-types */
const Gadgets2 = ({ products }) => {
  return (
    <div className="bg-gray-200 text-black p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Gadgets</h2>
      <ul className="list-decimal">
        {products.filter(product => product.name === "mobile").map((product, index) => (
          <li key={index} className="mb-4">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gadgets2;
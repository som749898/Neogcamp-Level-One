/* eslint-disable react/prop-types */
const ProductList = ({ products }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4">Product List</h2>
      <ul>
        {/* Product names will be displayed here */}
        {
          products.map(product => <li className="text-black" key={product.length}>{product.name}</li>)
        }
      </ul>
    </div>
  );
};

export default ProductList;
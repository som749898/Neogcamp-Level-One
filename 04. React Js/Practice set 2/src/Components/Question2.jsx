const Product = ({ name, price }) => {
  return (
    <div>
      <p className="font-bold text-blue-500">{name}</p>
      <p className="italic text-green-500">{price}</p>
    </div>
  );
};

export default Product;
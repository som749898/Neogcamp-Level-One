/* eslint-disable react/prop-types */
const FlowerBouquetPrice = ({ bouquets }) => {
  const price = bouquets.filter(({flowers}) => flowers.includes('rose'))[0].price;
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Flower Bouquet Prices</h2>
      <p>Price of bouquet with roses : {price}</p>
    </div>
  );
};

export default FlowerBouquetPrice;
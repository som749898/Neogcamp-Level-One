/* eslint-disable react/prop-types */
const FlowerBouquet = ({ bouquets }) => {
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Bouquet Flowers</h2>
      <ol>
        {
          bouquets.filter(bouquet => bouquet.price > 2000).map((bouquet, index) => <li key={index}>
            <ol>
              {
                bouquet.flowers.map((flower, index) => <li key={index}>
                  {flower}
                </li>)
              }
            </ol>
          </li>)
        }
      </ol>
    </div>
  );
};

export default FlowerBouquet;
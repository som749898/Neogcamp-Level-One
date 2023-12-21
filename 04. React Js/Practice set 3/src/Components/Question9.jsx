/* eslint-disable react/prop-types */
const CarCategoryCount = ({ cars }) => {
  const reducerFunction = ((acc,cur) => {
    console.log(cur.category,acc[cur.category]);
    return {...acc, [cur.category]: acc[cur.category] + 1  || 1}
  })
  const categoryObject = cars.reduce(reducerFunction , {});
  console.log("category result", categoryObject);
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Car Category Count</h2>
      <ul>
        {
          Object.keys(categoryObject).map((item, index) => <div key={index}>
            {item} - {categoryObject[item]}
          </div>)
        }
      </ul>
    </div>
  );
};

export default CarCategoryCount;
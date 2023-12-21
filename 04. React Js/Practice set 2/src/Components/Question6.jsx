import { useState } from "react";

const Article = ({ title, content }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      {/* Button to reveal content */}
      <button onClick={() => setDisplay(prev => !prev)} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">
        Know More
      </button>
      {/* Content will be displayed here after button click */}
      <div>{display && content}</div>
    </div>
  );
};

export default Article;
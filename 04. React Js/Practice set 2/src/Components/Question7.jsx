import { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
      <h2 className="text-xl font-medium mb-2">{name}</h2>
      {/* Button to reveal learning */}
      <button onClick={() => setDisplay(prev => !prev)} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">
        Know More
      </button>
      {/* Learning will be displayed here after button click */}
      {
        display && <div className="mt-2">{learning}</div>
      }
    </div>
  );
};

export default About;
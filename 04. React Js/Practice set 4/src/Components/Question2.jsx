import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const FontSizeController = () => {
  const [size, setSize] = useState("");
  const textRef = useRef(null);
  useEffect(() => {
    console.log("Ref", textRef.current);
    const style = window.getComputedStyle(textRef.current).fontSize;
    setSize(Number(style.substring( 0 , style.length-2)))
    // console.log("style", style);
    // setSize(window.getComputedStyle(textRef.current).fontSize)
  },[])
  return ( 
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md text-center">
      <h1 style={{fontSize: `${size}px`}} ref={textRef} className="text-2xl font-semibold mb-4">Welcome</h1>
      <div className="flex justify-center space-x-4">
        <button onClick={() => setSize(prev => prev + 1)} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">
          +
        </button>
        <button onClick={() => setSize(prev => prev - 1)} className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none">
          -
        </button>
      </div>
      {/* <p>{size}</p> */}
    </div>
  );
};

export default FontSizeController;
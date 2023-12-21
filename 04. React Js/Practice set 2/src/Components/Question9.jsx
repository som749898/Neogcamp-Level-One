import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState(false);
  const red = '#EE4B2B'
  const blue = '#89CFF0'
  const green = '#7FFFD4'
  const redHandler = () => {
    setColor("red");
    setDisplay(prev => color !== "red" ? true : !prev);
  }
  const blueHandler = () => {
    setColor("blue");
    setDisplay(prev => color !== "blue" ? true : !prev);
  }
  const greenHandler = () => {
    setColor("green");
    setDisplay(prev => color !== "green" ? true : !prev);
  }
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Color Picker</h2>
      <div>
        <button onClick={redHandler} className="text-white m-2">Red</button>
        <p>{color === "red" && display ? red : ""}</p>
      </div>
      <div>
        <button onClick={blueHandler} className="text-white m-2">Blue</button>
        <p>{color === "blue" && display ? blue : ""}</p>
      </div>
      <div>
        <button onClick={greenHandler} className="text-white m-2">Green</button>
        <p>{color === "green" && display ? green : ""}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
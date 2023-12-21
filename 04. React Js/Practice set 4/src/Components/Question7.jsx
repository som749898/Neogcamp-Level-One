/* eslint-disable react/prop-types */
import { useState } from "react";

const GameComponent = ({ lives }) => {
  const [live, setLive] = useState(lives);
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Game Component</h2>
      <div className="text-2xl font-bold mb-4">Lives: {live}</div>
      <button onClick={() => setLive(prev => prev -1)} disabled={live === 0} className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none">
        Decrement Lives
      </button>
      {live === 0 && <p className="text-red-500 mt-4">Game Over</p>}
    </div>
  );
};

export default GameComponent;
import { useState } from "react";
import HeartWave from "./heart-wave/HeartWave";
import "./App.scss";
function App() {
  const [fillLevel, setFillLevel] = useState(0);

  const handleButtonClick = () => {
    setFillLevel((prevLevel) => (prevLevel < 2 ? prevLevel + 1 : 0)); // Reset after reaching level 2
  };
  return (
    <div>
      <h1>Fill the Heart</h1>
      <p>Click the button to fill the heart with water.</
      p>
      <div className = "LoadingHeart">
      <HeartWave fillLevel={fillLevel} />
      </div>
      <button onClick={handleButtonClick} className="fill-button">
        Fill Water
      </button>
    </div>
  );
}

export default App;

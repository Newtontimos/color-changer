import { useState } from "react";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState("blue");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "blue" ? "red" : "blue");
        }}
      >
        color changer
      </button>
      <h1 style={{ color: textColor }}>My Country is good</h1>
    </div>
  );
}

export default App;

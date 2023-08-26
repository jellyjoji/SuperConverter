import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1>Super Converter</h1>
      <select>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometer & Miles</option>
      </select>
    </div>
  );
}

export default App;

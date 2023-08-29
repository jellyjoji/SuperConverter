import { useState } from "react";
import "./App.css";
import MinutesToHours from "./components/MinutesToHours";
import KmToMiles from "./components/KmToMiles";

function App() {
  const [index, setIndex] = useState(0);
  const onChnage = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onChnage}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometer & Miles</option>
      </select>
      <br />
      <br />
      {index === "0" ? <MinutesToHours /> : <KmToMiles />}
    </div>
  );
}

export default App;

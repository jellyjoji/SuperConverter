import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    // setFlipped(!flipped);
    reset();
    setFlipped((current) => !current);
  };

  return (
    <>
      <h1>Time Converter</h1>
      <label htmlFor="minutes">Minutes : </label>
      <input
        value={flipped ? amount * 60 : amount}
        onChange={onChange}
        id="minutes"
        placeholder="Minutes"
        type="number"
        // this input will be disabled if flipped is true
        disabled={flipped === true}
      />

      <br />
      <br />

      <label htmlFor="hours">Hours : </label>
      <input
        // value={minutes / 60}
        value={flipped ? amount : Math.round(amount / 60)}
        onChange={onChange}
        id="hours"
        placeholder="Hours"
        type="number"
        // readOnly
        // it will be disabled if flipped is false
        disabled={flipped === false}
      />

      <p>you want to convert : {amount}</p>

      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>flip</button>
    </>
  );
}

export default App;

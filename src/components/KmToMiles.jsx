import { useState } from "react";
import "../App.css";

function KmToMiles() {
  // const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onInvert = () => {
    // setInverted(!inverted);
    reset();
    setInverted((current) => !current);
  };

  return (
    <>
      <label htmlFor="Kilometer">Kilometer : </label>
      <input
        value={inverted ? amount * 1.609 : amount}
        onChange={onChange}
        id="kilometer"
        placeholder="Kilometer"
        type="number"
        // this input will be disabled if inverted is true
        disabled={inverted === true}
      />

      <br />
      <br />

      <label htmlFor="Miles">Miles : </label>
      <input
        value={inverted ? amount : Math.round(amount / 1.609)}
        onChange={onChange}
        id="miles"
        placeholder="Miles"
        type="number"
        // readOnly
        // it will be disabled if inverted is false
        disabled={inverted === false}
      />

      <p>You want to convert : {amount}</p>

      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "invert" : "Turn Back"}</button>
    </>
  );
}

export default KmToMiles;

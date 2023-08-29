import { useState } from "react";

function MinutesToHours() {
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
      <label htmlFor="minutes">Minutes : </label>
      <input
        value={inverted ? amount * 60 : amount}
        onChange={onChange}
        id="minutes"
        placeholder="Minutes"
        type="number"
        // this input will be disabled if inverted is true
        disabled={inverted === true}
      />

      <br />
      <br />

      <label htmlFor="hours">Hours : </label>
      <input
        // value={minutes / 60}
        value={inverted ? amount : Math.round(amount / 60)}
        onChange={onChange}
        id="hours"
        placeholder="Hours"
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

export default MinutesToHours;

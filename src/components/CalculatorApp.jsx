import React, { useEffect, useRef, useState } from "react";

const CalculatorApp = () => {
  // calculator state value
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resestInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevValue) => prevValue * 0);
  };

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // tracking state valuse
  const previousStateValue = useRef(null);
  const [currentValue, setCurrentValue] = useState("");

  // runs every re-render
  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    previousStateValue.current = currentValue;
  }, [currentValue]);

  return (
    <>
      <div>
        <div>
          <h2>Calculator App</h2>
        </div>
        <form>
          {/* ref keyword give me access to that specific element DOM node or properties */}
          <input type="number" pattern="[0-9]" ref={inputRef} />
          <p ref={resultRef}>{result}</p>
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Minus</button>
          <button onClick={times}>Times</button>
          <button onClick={divide}>Divide</button>

          {/* reset */}
          <br />
          <br />
          <button onClick={resestInput}>Rest Inout</button>
          <button onClick={resetResult}>Reset Result</button>
        </form>
      </div>
      
      {/* <div>
        <h1>How many times the App re-renders</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h3>How many times the App renders: {count.current}</h3>
      </div> */}

      {/* use useRef to track previous state value */}
      {/* <div>
        <h1>Tracking state value</h1>
        <input
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <h3>Current state value : {inputValue}</h3>
        <h3>Previous state value : {previousStateValue.current} </h3>
      </div> */}
    </>
  );
};

export default CalculatorApp;

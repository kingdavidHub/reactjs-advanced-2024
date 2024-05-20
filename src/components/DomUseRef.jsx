import React, { useRef} from "react";




// The main difference between useRef and using document.getElementById or document.querySelector is that useRef provides a way to access DOM elements or store mutable values within the React component lifecycle, while document.getElementById and document.querySelector are vanilla JavaScript methods for accessing DOM elements directly. Additionally, useRef is more efficient than querying the DOM on every render, as it creates a persistent reference that can be reused across renders.

// Accessing Underlying DOM Elements: The useRef hook allows you to create a mutable reference to a DOM element or any other value that persists across renders. This is useful when you need to directly interact with a DOM element, such as setting focus, measuring dimensions, or triggering imperative animations.


const DomUseRef = () => {
  const formInputRef = useRef(null);

  const focusInput = () => {
    // to access the DOM element directly we will use formInputRef.current and to access the fouse node then we will use the focus method
    formInputRef.current.focus() //allows us to move our cursor to the input without having to click, tab or press enter to get there
    console.log(formInputRef.current.value);
  };

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput} >Focus Input</button>
    </>
  );
};

export default DomUseRef;

import React, { useEffect, useState } from "react";

const WelcomeSideEffect = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const savedMsg = toggle
      ? "Welcome to little lemon"
      : "Using the useEffect hook";
    document.title = savedMsg;
    document.querySelectorAll(".useEffect-hook")[0].innerHTML = savedMsg;
    // console.log(document.querySelectorAll(".useEffect-hook")[0].textContent);

    // the dependency array watches for any changes on the variable toggle so if there is any change it will re-render the component or execute the function / side-effect
  }, [toggle]);

  // ! never use a hook inside a conditions and loops
  // if(toggle == false){
  //   useEffect(() => {
  //     // Bad code
  //   }, [wrongCode])
  // }

  return (
    <>
      <h2 className="useEffect-hook">Using the useEffect hook</h2>
      <button onClick={handleToggle}>Toggle message</button>

      {toggle && <h2>Welcome to React useEffect</h2>}
    </>
  );
};

export default WelcomeSideEffect;

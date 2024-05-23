import React from "react";

// const order = {
//   name: "Burger",
//   price: 10,
//   size: "small",
//   toppings: ["cheese", "lettuce", "tomato", "ketchup", "mustard", "onion"],
// }

// const orderAmend = {
//   ...order,
//   price: 50
// }

const Button = ({ type, children, ...buttonProps }) => {
  // ...buttonProps is making a copy of the buttonProps object that is passed in. // Object { onClick: onClick(), onSubmit: "hello", constant: "me" }
  // type won't be shown there because we have a default value already buttonProps will provide the rest of the properties

  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  console.log(buttonProps);
  return (
    <>
      <button className={`Button ${className}`} {...buttonProps}>
        {children}
      </button>
    </>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <>
      <Button
        type="secondary"
        // depending on the order of the spread the behaviour may differ ::: right now signup will show but if the login is moved downwards the behaviour will differ and it will show login
        onClick={() => alert("Logging In!")}
        {...buttonProps} // singUp has overide the current props
      >
        {children}
      </Button>
    </>
  );
};

const WelcomeScreen = () => {
  return (
    <>
      <h1>WelcomeScreen</h1>
      <Button
        type="primary"
        onClick={() => alert("Signing Up!")}
        onSubmit="hello"
        constant="me"
      >
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing Up!")}>Login</LoginButton>
    </>
  );
};

export default WelcomeScreen;

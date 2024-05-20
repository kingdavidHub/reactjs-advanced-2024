import React from "react";

const Button = ({ backgroundColor, children }) => {
  return (
    <button style={{ backgroundColor }} className="delButton">
      {children}
    </button>
  );
};

// So, when you pass props to the Button component like this: <Button backgroundColor="red">Click me</Button>, React will create an object with those props:
// { backgroundColor: "red", children: "Click me" }.

const Alert = ({ children }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  // ! Method calling component 1
  // return <Button  backgroundColor={"red"} children={"delete"}/>

  // {backgroundColor: "red", children: "delete"}
  // ! Method calling component 2
  return <Button backgroundColor="red">Delete</Button>;
};

const ModalDialog = () => {
  return (
    <>
      <div className="modal">
        <header>
          <h1>Little Lemon restaurant 👨‍🍳</h1>
        </header>

        {/* 
          // ! Method 1
          all this are children props on the Alert component
        */}

        <Alert>
          <h4>Delete account</h4>
          <p>
            Are you sure you want to proceed? You will miss out on the chef's
            delicious recipes.
          </p>
          <DeleteButton />
        </Alert>

        {/* 
          // ! Method 2
        */}
        {/* <Alert
          children={
            <>
              <h4>Delete account</h4>
              <p>
                <b>Are you sure you want to proceed ?</b> You will miss out on the
                chef's delicious recipes.
              </p>
              <DeleteButton />
            </>
          }
        /> */}
      </div>
    </>
  );
};

export default ModalDialog;

import React, { useEffect } from "react";

const ShoppingCart = ({ count, price }) => {
  const total = count * price;

  // dealing with side effect
  useEffect(() => {
    console.log(total); // console.log is an external function or Browser API in our react component making it a impure function
  }, []);

  return (
    <>
      <h1>Total: {total}</h1>
    </>
  );
};

export default ShoppingCart;

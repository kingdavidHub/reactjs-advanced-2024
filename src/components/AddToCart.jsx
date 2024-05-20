import React, { useReducer } from "react";

const IPHONE_PRICE = 100;
const SAMSUNG_PRICE = 1000;

const reducer = (state, action) => {
  const { total, iphoneQuantity, samsungQuantity } = state;

  switch (action.type) {
    case "buy_iphone":
    case "add_iphone":
      return {
        ...state,
        total: Math.max(total + IPHONE_PRICE, 0),
        iphoneQuantity: iphoneQuantity + 1,
      };

    case "buy_samsung":
    case "add_samsung":
      return {
        ...state,
        total: total + SAMSUNG_PRICE,
        samsungQuantity: samsungQuantity + 1,
      };
    case "rm_iphone":
      return {
        ...state,
        total: Math.max(total - 100, 0),
        iphoneQuantity: Math.max(iphoneQuantity - 1, 0),
      };
    case "rm_samsung":
      return {
        ...state,
        total: Math.max(total - 1000, 0),
        samsungQuantity: Math.max(samsungQuantity - 1, 0),
      };
    default:
      return state;
  }
};

const AddToCart = () => {
  const initialState = { total: 0, iphoneQuantity: 0, samsungQuantity: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>AddToCart</h2>
      <div>
        <h3>Iphone $100</h3>
        <button onClick={() => dispatch({ type: "buy_iphone" })}>
          Add to cart
        </button>{" "}
        <span>
          <button onClick={() => dispatch({ type: "add_iphone" })}>+</button>
          Quantity: {state.iphoneQuantity}{" "}
          <button
            onClick={() => dispatch({ type: "rm_iphone" })}
            disabled={state.iphoneQuantity === 0 ? true : false}
          >
            -
          </button>
        </span>
      </div>
      <div>
        <h3>Samsung $1000</h3>
        <button onClick={() => dispatch({ type: "buy_samsung" })}>
          Add to cart
        </button>{" "}
        <span>
          <button onClick={() => dispatch({ type: "add_samsung" })}>+</button>
          Quantity {state.samsungQuantity}{" "}
          <button
            onClick={() => dispatch({ type: "rm_samsung" })}
            disabled={state.samsungQuantity === 0 ? true : false}
          >
            -
          </button>
        </span>
      </div>
      <h3>Total: {state.total}</h3>
    </>
  );
};

export default AddToCart;

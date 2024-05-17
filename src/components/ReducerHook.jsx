import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride") {
    return {
      money: state.money + 10,
    };
  }

  if (action.type === "fuel") {
    return {
      money: state.money - 50,
    };
  }
  return new Error("Invalid action");
};

const ReducerHook = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Wallet: {state.money < 0 ? 0 : state.money}</h1>
        <div>
          <button onClick={() => dispatch({ type: "ride" })}>
            A new customer
          </button>
          <button onClick={() => dispatch({ type: "fuel" })}>
            Refill the tank
          </button>
        </div>
      </div>
    </>
  );
};

export default ReducerHook;

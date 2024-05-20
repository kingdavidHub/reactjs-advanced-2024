import React, { useReducer } from "react";

const reducer = (state, action) => {
  const { money } = state;
  if (action.type === "buy_ingridents") {
    return {
      money: money - 10,
    };
  }

  if (action.type === "sell_a_meal") {
    return {
      money: money + 20,
    };
  }

  if (action.type === "celebrity_visit") {
    return {
      money: money + 5000,
    };
  }
  return state;
};

const ExpenseTracker = () => {
  const initialSize = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialSize);

  return (
    <>
      <h1>Wallet {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingridents" })}>
          Shopping for vegies
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          Buy a meal to a customer
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          Celebrity visit
        </button>
      </div>
    </>
  );
};

export default ExpenseTracker;

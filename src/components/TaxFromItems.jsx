import React, { useReducer } from "react";

const soldItems = [
  {
    id: 1,
    itemName: "shoes",
    price: 200,
  },
  {
    id: 2,
    itemName: "iphones",
    price: 200,
  },
];

const ItemList = ({ items, dispatch }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            ${item.itemName}: ${item.price}{" "}
            <button
              onClick={() => dispatch({ type: item.itemName, itemName: item.itemName })}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const reducer = (state, action) => {
  const { tax } = state;
  switch (action.type) {
    case "shoes":
      return {
        tax: tax + 50,
      };
    case "iphones":
      return {
        tax: tax + 70,
      };
    default:
      return state;
  }
};

const TaxFromItems = () => {
  const initialTaxOwing = { tax: 0};
  const [state, dispatch] = useReducer(reducer, initialTaxOwing);
  return (
    <>
      <h1>Tax from items sold</h1>
      <div className="items">
        <ItemList items={soldItems} dispatch={dispatch} />
      </div>
      <div>
        <h2>Tax collector: $ {state.tax}</h2>
      </div>
    </>
  );
};

export default TaxFromItems;

import React from "react";
import Counter from "./components/Counter";
import ModeToggler from "./components/ModeToggler";
import MealProvider from "./provider/MealProvider";
import MealList from "./components/MealList";
import MealsCounter from "./components/MealsCounter";

const App = () => {
  const clickHandler = () => {
    console.log("Hi there function coming from parent component");
  };

  return (
    <>
      {/* <ModeToggler /> */}
      {/* <Counter clickHandler={clickHandler} /> */}
      <div>
        <MealProvider>
          <MealList />
          <MealsCounter />
        </MealProvider>
      </div>
    </>
  );
};

export default App;

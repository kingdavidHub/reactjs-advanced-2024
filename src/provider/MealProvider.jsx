import React, { createContext, useContext, useState } from "react";

// ? Create Context
const MealsContext = createContext();
const todayMeals = ["Beaked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

// the Context API is used to (share values) or state across a component tree without having to (pass props down manually) at every level.

const MealProvider = ({ children }) => {
  const [meals, setMealsList] = useState(todayMeals);
  return (
    <>
      <MealsContext.Provider value={{ meals }}>
        {/* The children value wraps everything that we will wrap to the provider */}
        {children}
      </MealsContext.Provider>
    </>
  );
};

// Export 1
// meals obj is returned to the function useMealListContext
export const useMealListContext = () => useContext(MealsContext);

// Export 2
export { MealsContext };

// you can use either of the 2 export functions method 1 is okay because i won't have to import useContext again in child component

export default MealProvider;

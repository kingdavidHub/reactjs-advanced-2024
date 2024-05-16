import React, { createContext, useContext, useState  } from "react";

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

// meals obj is returned to the function useMealListContext
export const useMealListContext = () => useContext(MealsContext);

export default MealProvider;

import React, { createContext, useContext, useState } from "react";

// create context
const MealContext2 = createContext();
const todayMeals = ["Beaked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealProvider2 = ({ children }) => {
  const [meals, setMeals] = useState(todayMeals);
  return (
    <>
      <MealContext2.Provider value={{ meals }}>
        {children}
      </MealContext2.Provider>
    </>
  );
};

// export const
export const useCreateProvider = () => useContext(MealContext2);

export default MealProvider2;

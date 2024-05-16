import React from "react";
import { useMealListContext } from "../provider/MealProvider";
import { useCreateProvider } from "../provider/MealProvider2";

const MealsCounter = () => {
  // const { meals } = useMealListContext();

  const { meals: meals2 } = useCreateProvider();

  return (
    <>
      {/* <h3>Number of meals today: {meals.length}</h3> */}

      {/* meals 2.0 counter */}
      <h3>Number of meals today: {meals2.length}</h3>
    </>
  );
};

export default MealsCounter;

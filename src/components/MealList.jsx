import React, { useContext } from 'react'
import { useMealListContext, MealsContext } from '../provider/MealProvider'
import { useCreateProvider } from '../provider/MealProvider2';

const MealList = () => {
  // destrucre meals from useMealListContext
  // const { meals } = useMealListContext();
  // const { meals } = useContext(MealsContext);


  const { meals: meals2 } = useCreateProvider();

  // useing mealProvider 2.0

  return (
    <>
       {/* <h1>Meals list using context API</h1>
       {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
       ))} */}


       {/* meals 2.0 */}
       <h1>Meals list using context API 2.0</h1>
       {meals2.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
       ))}
    </>
  )
}

export default MealList
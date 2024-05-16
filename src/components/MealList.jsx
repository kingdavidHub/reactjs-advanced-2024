import React from 'react'
import { useMealListContext } from '../provider/MealProvider'

const MealList = () => {
  // destrucre meals from useMealListContext
  const { meals } = useMealListContext();


  return (
    <>
       <h1>Meals list using context API</h1>
       {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
       ))}
    </>
  )
}

export default MealList
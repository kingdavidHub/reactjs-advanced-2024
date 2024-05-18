import React from "react";
import Counter from "./components/Counter";
import ModeToggler from "./components/ModeToggler";
import MealProvider from "./provider/MealProvider";
import MealList from "./components/MealList";
import MealsCounter from "./components/MealsCounter";
import ReducerHook from "./components/ReducerHook";
import MealProvider2 from "./provider/MealProvider2";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import DateToday from "./components/DateToday";
import LocalVideo from "./components/LocalVideo";
import CalculatorApp from "./components/CalculatorApp";
import TodoApp from "./components/Todo/TodoApp";

// router an array of links
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about-me",
        element: <About />
      }
    ]
  },
  {
    path: "/about-me",
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  }
])


const App = () => {
  const clickHandler = () => {
    console.log("Hi there function coming from parent component");
  };

  return (
    <>
      {/* <ModeToggler /> */}
      {/* <Counter clickHandler={clickHandler} /> */}
      {/* <div>
        <MealProvider>
          <MealList />
          <MealsCounter />
        </MealProvider>
      </div> */}

      {/* <MealProvider2>
        <MealList />
        <MealsCounter />
      </MealProvider2> */}
      {/* <ReducerHook /> */}

       {/* <RouterProvider router={router} />    */}
       {/* <DateToday /> */}

       {/* Loading Local video */}
       {/* <LocalVideo /> */}

       {/* Calculator App */}
       {/* <CalculatorApp /> */}

       {/* Todo App Managing keys in react */}
       <TodoApp />
    </>
  );
};

export default App;

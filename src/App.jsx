import React from "react";
import Counter from "./components/Counter";
import ModeToggler from "./components/ModeToggler";
import MealProvider from "./provider/MealProvider";
import MealList from "./components/MealList";
import MealsCounter from "./components/MealsCounter";
import ReducerHook from "./components/ReducerHook";
import MealProvider2 from "./provider/MealProvider2";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import DateToday from "./components/DateToday";
import LocalVideo from "./components/LocalVideo";
import CalculatorApp from "./components/CalculatorApp";
import TodoApp from "./components/Todo/TodoApp";
import FormComponent from "./components/FormComponent";
import Feedback from "./components/Feedback";
import GaolTracker from "./components/GaolTracker";
import ShoppingCart from "./components/ShoppingCart";
import WelcomeSideEffect from "./components/WelcomeSideEffect";
import FetchUserData from "./components/FetchUserData";
import AddToCart from "./components/AddToCart";
import ExpenseTracker from "./components/ExpenseTracker";
import DomUseRef from "./components/DomUseRef";
import ModalDialog from "./components/ModalDialog";
import LiveOrders from "./components/LiveOrders";
import TaxFromItems from "./components/TaxFromItems";
import WelcomeScreen from "./components/WelcomeScreen";

// router an array of links
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-me",
        element: <About />,
      },
    ],
  },
  {
    path: "/about-me",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

// ! REACT HOOKS
// * They are special functions that let you use state and they can only be used in functional component( Follow specific rules:) must be called at the top level of the component, not inside loops, conditions, or nested functions.
// * They are Hooks that manage states in a react component

// ! REACT APIS
// * React APIs refer to the broader set of functions, classes, and objects provided by the React library that you can use to build React applications. This includes methods for creating components, working with elements, managing context, refs, and more.

// * Can be used in both functional and class components. Provide a range of functionalities beyond state and lifecycle management, including element creation, context management, and more.

// React Hooks: Special functions for functional components to use state and lifecycle methods (useState, useEffect, useContext, etc.).
// React APIs: The broader set of functionalities provided by React for both functional and class components (React.createElement, React.Component, React.Fragment, etc.).
// Understanding the distinction and proper usage of React Hooks and React APIs is crucial for effective React development.

const App = () => {
  // const clickHandler = () => {
  //   console.log("Hi there function coming from parent component");
  // };

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
      {/* <TodoApp /> */}

      {/* <FormComponent /> */}
      {/* <Feedback /> */}
      {/* <GaolTracker /> */}

      {/* Handling side effect */}
      {/* <ShoppingCart count={1} price={20} /> */}
      {/* <WelcomeSideEffect /> */}
      {/* <FetchUserData url={'https://randomuser.me/api/'}/> */}

      {/* using useReducer very interesting in making complex state changes and updates  */}
      {/* <ExpenseTracker /> */}
      {/* <AddToCart /> */}

      {/* <DomUseRef /> */}
      {/* <ModalDialog /> */}
      {/* <LiveOrders /> */}
      {/* <TaxFromItems /> */}
      <WelcomeScreen />
    </>
  );
};

export default App;

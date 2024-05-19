// * pure functions are functions that always return the same result given the same arguments

// side effects are side effects that happen outside of the pure function

//impure functions are functions that have side effects

// * PURE FUNCTIONS
function EstablishedYear(props) {
  return <h1>Established year{props.year}</h1>;
}

// * IMPURE FUNCTIONS invoke (console.log fetch and browser geolocation )etc -> side effects can be tought of as something external to a functions or something outside of a function


let count = 0;
// This function increments a global variable count and returns the new value. It is impure because it modifies external state (the count variable) and produces a different output each time it is called, even with the same input.

function incrementCount() {
  count++;
  return count;
}


function ShoppingCarts(props) {
  const total = props.count * props.price;
  console.log(total); // ! side effect -> it's something outside of a function

  return <h1>Total is {total}</h1>;
}

function App() {
  return (
    // this type of function is a pure function as long as the value of the year prop is 2003 no matter how many times it's invoked or render it will always return 2003

    // there fore the etablished year function has no sideEffects
    <>

      {/* this type of function has no sideEffects as it's not a pure function  */}
      <EstablishedYear year={2003} />

      {/* this type of function has sideEffects as it has sideEffects */}
      <ShoppingCarts count={5} price={100} />
    </>
  );
}
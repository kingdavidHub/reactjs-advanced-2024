import React, { useState, useEffect } from "react";

// HOC is a function that takes a component and returns a new component

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    // since eventListener is a invoked function then it's a sideEffect which has to be declared in useEffect to handle all the sideEffects
    useEffect(() => {
      const handleMouseChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMouseChange);

      // always cleanUp side Effects when component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseChange);
      };
    }, []);

    return <WrappedComponent mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <h3>Mouse Positions:</h3>
      <div className="Row">
        <span>X: {mousePosition.x}</span>
        <span>Y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

// * The Panel and Point components are doing the same LOGIC accessing the mouse event function we can impliment it one after the other but that we do CODE repition which we want to avoid that so we use the HOC pattern to combine them

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

// * New component from the HOC function is stored in the variable as a new component
const PaenelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const HocApp = () => {
  return (
    <>
      <div className="hoc">
        <header>
          <h2>Little Leamon Restaurant 👨‍🍳</h2>
        </header>
        <h2>Higher Order Component</h2>
        <PaenelMouseTracker />
        <PointMouseTracker />
      </div>
    </>
  );
};

export default HocApp;

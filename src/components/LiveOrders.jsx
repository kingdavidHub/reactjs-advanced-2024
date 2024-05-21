import React, { Children, cloneElement } from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="row">
      {/* using React.Children APIS */}
      {Children.map(children, (child, index) => {
        // creare a new element from the child and second arguement we can set props to it
        return cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

const LiveOrders = () => {
  return (
    <>
      {/* spacing=32 is passing a props to a component */}
      <Row spacing="32">
        <p>Pizza Magarita</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </>
  );
};

export default LiveOrders;

import React, { useEffect, useState } from "react";

// render props pattern is just like HOC pattern comes from the component properties just like childrens

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["Cake", "Ice Cream", "Cupcake", "Brownie"]);
    } else {
      setData("Water", "Juice", "Soda");
    }
  }, []);

  return render(data);
};

// Deserts and Drinks are 2 component perfomring the same logic but with different urls
const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlemoon/desserts"
      render={(data) => <p>{data.length} Desserts</p>}
    />
  );
};
const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlemoon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

const RenderFunc = () => {
  return (
    <>
      <h1>Using Render</h1>
      <DessertsCount />
      <DrinksCount />
    </>
  );
};

export default RenderFunc;

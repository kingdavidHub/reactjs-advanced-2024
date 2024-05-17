import React, { useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DateToday = () => {
  const [date] = useState(new Date().getDay());

  return (
    <div>
      <h1>Happy {daysOfWeek[date]}</h1>
    </div>
  );
};

export default DateToday;

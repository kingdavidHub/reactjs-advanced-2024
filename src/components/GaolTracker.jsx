import React, { useState } from "react";

const AddGoal = ({ addGoals }) => {
  const [goal, setGoal] = useState({
    goal: "",
    by: "",
  });

  const changeHandler = (event) => {
    if (event.target.value.length > 0) {
      setGoal((prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { goal: goal2, by } = goal;

    if (goal2.length && by.length > 0) {
      addGoals(goal);
      setGoal({
        goal: "",
        by: "",
      });
    }
  };

  return (
    <>
      <h1>Add goal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Gaol"
          value={goal.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By.."
          value={goal.by}
          onChange={changeHandler}
        />
        <button type="submit">Submit Goal</button>
      </form>
    </>
  );
};

const ListGoals = ({ allGoals }) => {
  return (
    <>
      <ul>
        {allGoals && allGoals.length >= 0
          ? allGoals.map(({ goal, by }) => (
              <li key={goal}>
                <span>
                  ✅My goal is to <b>{goal}</b>, by <b>{by}</b>
                </span>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

const GaolTracker = () => {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <>
      <AddGoal addGoals={addGoal} />
      <ListGoals allGoals={allGoals} />
    </>
  );
};

export default GaolTracker;

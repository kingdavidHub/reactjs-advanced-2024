import React, { useState } from "react";
import TodoPrimary from "./TodoPrimary";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:30",
    },
  ]);

  const reverserOder = () => {
    // However, this approach is not recommended because it violates the principle of immutability in React. Mutating state directly can lead to unexpected behavior and potential bugs.

    //     The spread operator [...todos] creates a new array by spreading the elements of the todos array into a new array.
    // The reverse() method is then called on this new array, creating a reversed copy of the original todos array.
    // The reversed copy is passed to the setTodos function, which updates the state with the new reversed array.

    // * In React, it's generally recommended to treat (state as immutable) and create new objects or arrays when updating state, rather than modifying the existing ones directly.
    // setTodos(todos.reverse());

    // ! I am still directly modifyung the state which is an immutable object which is wrong in react always treat state as immutable object -> They cant be changed
    // const newTodo = todos;
    // setTodos(newTodo.reverse());

    // recommended approach use the spread operator to copy it in a new array and reverse it


    // * reverse is a mutiating method so it will change the original array and modify it rather than creating a new 
    setTodos([...todos].reverse());
  };

  return (
    <>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <TodoPrimary
              key={todo.id}
              id={todo.id}
              createdAt={todo.createdAt}
            />
          ))}
        </tbody>
      </table>

      <button onClick={reverserOder}>Reverse Order</button>
    </>
  );
};

export default TodoApp;

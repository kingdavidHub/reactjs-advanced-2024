import React from "react";

const TodoPrimary = ({ id, createdAt }) => {
  return (
    <>
      <tr>
        <td>
          <label>{id}</label>
        </td>
        <input />
        <td>
          <label>{createdAt}</label>
        </td>
      </tr>
    </>
  );
};

export default TodoPrimary;

import React, { useState } from "react";

const FormComponent = () => {
  // A controlled component has a local state and value prop to turn the input into a controlled one

  const [name, setName] = useState("");

  const handleForm = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log("Form is submited");
    setName("");
  };

  return (
    <>
      {/* Example of an uncontrolled form having all the state leaving ing the form */}
      {/* <form>
        <fieldset>
          <div className="field">
            <label>NAME: </label>
            <input type="text"  placeholder='name' name='name'  />
          </div>
          <button type='submit'>submit</button>
        </fieldset>
      </form> */}

      {/* Controlled Form data */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">NAME: </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleForm}
            />
          </div>

          {/* empty string in boolean is false and non empty string is true. (so our empty string must be true to disable the button) */}
          <button
            style={
              // if name is empty disable the button
              !name
                ? {
                    backgroundColor: "grey",
                    color: "white",
                    cursor: "not-allowed",
                  }
                : { backgroundColor: "black", color: "white" }
            }
            type="submit"
            disabled={!name}
          >
            submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default FormComponent;

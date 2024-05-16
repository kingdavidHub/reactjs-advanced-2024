import React, { useState } from "react";

const ModeToggler = () => {
  const [toggleMode, setToggleMode] = useState(false);
  const darkMode = <h1>Dark mode is on</h1>;
  const lightMode = <h1>Light mode is on</h1>;

  return (
    <div>
      {toggleMode ? darkMode : lightMode}
      <button onClick={() => setToggleMode(!toggleMode)}>Change Mode</button>
    </div>
  );
};

export default ModeToggler;

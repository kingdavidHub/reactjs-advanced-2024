import React from "react";
import HomePage from "../../pages/HomePage";
import About from "../../pages/About";
import { Link} from "react-router-dom";

// old way
// import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/dead-link">Test Error Page</Link>
          </li>
        </ul>
      </nav>


      {/* old way */}
      {/* <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-me" element={<About />} />
      </Routes> */}
    </>
  );
};

export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

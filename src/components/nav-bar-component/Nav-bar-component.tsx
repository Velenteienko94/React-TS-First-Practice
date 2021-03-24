import React from "react";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-3 px1">
        <a href="/" className="brand-logo">
          Hard To Be A God
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">To do list</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

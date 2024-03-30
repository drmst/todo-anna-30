import React, { useContext } from "react";
import "./styles.css";
import { NavbarLink } from "../NavbarLink.jsx";
import { UserContext } from "../../App.js";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <div>
          <NavbarLink title="Logo" />
        </div>
        <div className="navigation--right">
          <NavbarLink title="Menu" />
          {user.isLoggedInUser ? (
            <NavbarLink title={"Hi " + user.name} />
          ) : (
            <NavbarLink title={"you are logout"} />
          )}
        </div>
      </ul>
    </nav>
  );
};

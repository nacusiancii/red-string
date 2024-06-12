import React from "react";
import RedStringLogo from "../RedStringLogo";
import PrimaryButton from "../buttons/AllJobsButton";
import "./NavBarStyles.css";

interface NavBarProps {
  // Add any necessary props here
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="flex-row justify-space-between align-center nav-bar">
      <div className="flex-row justify-center align-center">
        <RedStringLogo />
      </div>
      <div
        className="flex-row justify-space-around align-center"
        style={{ width: "20rem" }}
      >
        <a href="/" className="text-color no-decoration">
          Contact us
        </a>
        <a href="/" className="text-color no-decoration">
          About us
        </a>
        <PrimaryButton buttonName={"All Jobs"} />
      </div>
    </nav>
  );
};

export default NavBar;

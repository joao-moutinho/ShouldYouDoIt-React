import React from "react";
import "./header.scss";
import Title from "../Title/index.js";
import Links from "../Links";


const Header = () => {
  return (
    <div className="header">
      <Title />
      <Links/>
    </div>
  );
};

export default Header;

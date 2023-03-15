import React from "react";

const Navigation = () => {

  const navItems = ["welcome", "teams", "learn_rugby"];
  const navList = navItems.map((nav,index) => <li key={index} className="second-nav-list"  data-nav={nav}>{nav.toUpperCase().replace('_', ' ')}</li>);

  return (
    <nav id="second-nav">
        <ul>
            {navList}
        </ul>
    </nav>
    );
};

export default Navigation;

import React from "react";

const GameNav = () => {

  const navItems = ["2023", "2022", "2021"];
  const navList = navItems.map((nav,index) => <li key={index} className="match-list"  data-nav={`matches_${nav}`}>{nav.toUpperCase().replace('_', ' ')}</li>);

  return (
    <nav id="match-nav">
        <ul>
            {navList}
        </ul>
    </nav>
    );
};

export default GameNav;
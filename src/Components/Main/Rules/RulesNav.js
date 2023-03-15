import React from "react";

const RulesNav = () => {

  const navItems = ["begineer-rules", "advance-rules", "recent-changes"];
  const navList = navItems.map((nav,index) => <li key={index} className="rule-list"  data-nav={nav}>{nav.toUpperCase().split('-')[0]}</li>);

  return (
    <nav id="second-nav">
        <ul>
            {navList}
        </ul>
    </nav>
    );
};

export default RulesNav;

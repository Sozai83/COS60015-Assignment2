import React from "react";

const Navigation = () => {

  const navItems = ["matches", "home", "contact"];
  const navList = navItems.map((nav,index) => <li key={index} className="top-nav-list"  data-nav={nav}>{nav.toUpperCase()}</li>);

  return (
    <div className="wrapper">
      <nav id="top-nav">
          <ul>
              {navList}
          </ul>
      </nav>
    </div>
    );
};

export default Navigation;

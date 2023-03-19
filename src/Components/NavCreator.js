import React from "react";
import '../CSS/layout/navigation.scss';

const NavCreator = (props) => {
   const navList = props.NavItems ? props.NavItems.map((nav,index) => <li key={index} data-nav={nav.replace(" ", "-").toLowerCase()}>{nav.toUpperCase()}</li>) : <li>No list</li>;
   const hasID = props.NavId ? true : false;
    return (
        <nav id={hasID && props.NavId}>
            <ul>
                {navList}
            </ul>
        </nav>
    ); 
};

export default NavCreator;
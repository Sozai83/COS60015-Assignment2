import React, { useState, useEffect } from "react";
import '../CSS/layout/navigation.scss';

const withNavList = Component => {
    const NewComponent = ({navItems, navId, selectNav, ...props})=>{
        const [navList, setNavList] = useState(null);
        //Convert navItems to navList JSX
        useEffect(()=> {
            const items = navItems ? navItems.map((nav,index) => <li key={index} data-nav={nav.replace(" ", "-").toLowerCase()} onClick={selectNav}>{nav.toUpperCase()}</li>) : <li>No list</li>;
            setNavList(items);
        }, []);

         return (
             <Component {...props} nav={{ items: navList, id: navId}}/>
         );      
    }
    return NewComponent;
};

export default withNavList;
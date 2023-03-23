import React, { useState, useEffect } from "react";
import '../CSS/layout/navigation.scss';

const withNavList = Component => {
    const NewComponent = ({navItems, navId, selectNav, ...props})=>{
        const [navList, setNavList] = useState(null);
        const selectEl = (event)=>{
            selectNav(event);
            event.target.parentNode.childNodes.forEach(chil => chil.classList.remove('Active'));
		    event.target.classList.add('Active');
        }
        //Convert navItems to navList JSX
        useEffect(()=> {
            const items = navItems ? navItems.map(
                (nav,index) => 
                <li key={index} 
                    data-nav={nav.replace(" ", "")}
                    className={props.default === nav && 'Active'}
                    onClick={selectEl}
                    >
                        {nav.toUpperCase()}
                    </li>
                ) : <li>No list</li>;
            setNavList(items);
        }, []);

         return (
             <Component {...props} nav={{ items: navList, id: navId}}/>
         );      
    }
    return NewComponent;
};

export default withNavList;
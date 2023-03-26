import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";
import {scrollToEl, changeActive} from '../../utils'



const Main = (props) => {
	const mainNav = ['Welcome', 'Teams', 'Learn Rugby'];
	const navId = "SecondNav"
	const prevStatus = useRef(null)
	const [selectedComponent, setSelectedComponent] = useState('Welcome');
	const selectnav = (event) => {
		scrollToEl(event, setSelectedComponent);
	};
	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedComponent){
			changeActive(selectedComponent, navId);
		}
		prevStatus.current = selectedComponent;
	},[selectedComponent]);
    return (
		<main id="Home" className={props.hidden && 'Hidden'}>
			<div className="Wrapper">
				<Navigation 
					navItems={mainNav}
					navId= {navId}
					selectNav={selectnav}
					default={selectedComponent} 
				/>
				<Welcome />
				<Teams />
				<Rules />
			</div>
		</main>
    );
};

export default Main;
import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation";
import MatchInfo from "./MatchInfo";
import {selectEl,changeActive} from '../../utils'
import '../../CSS/layout/matches.scss'

const AsideMatches = (props) => {
	const ruleNavItems = ["2023", "2022", "2021"];
	const navId = "MatchNav"
    let prevStatus = useRef(null);
	const [selectedComponent, setSelectedComponent] = useState('2023');
	const selectNav = (event) => {
		selectEl(event, setSelectedComponent, '2023');
	};

	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedComponent){
			changeActive(selectedComponent, navId);
		}
		prevStatus.current = selectedComponent;
	},[selectedComponent]);
	
    return (
		<aside id="Matches" className={props.hidden && 'Hidden'}>
            <div class="Wrapper">
			<Navigation
				navItems={ruleNavItems}
				navId={navId}
				selectNav={selectNav} 
				default={selectedComponent}/>
			<MatchInfo selected={selectedComponent}/>
			</div>
		</aside>
    );
};

export default AsideMatches;
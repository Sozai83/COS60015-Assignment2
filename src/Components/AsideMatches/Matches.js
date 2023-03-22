import React, {useState} from "react";
import Navigation from "../Navigation";
import MatchInfo from "./MatchInfo";
import '../../CSS/layout/matches.scss'

const AsideMatches = (props) => {
	const ruleNavItems = ["2023", "2022", "2021"];
	const [selectedComponent, setSelectedComponent] = useState('2023');
	const selectNav = (event) => {
		setSelectedComponent(event ? event.target.dataset.nav : '2023');
		console.log(selectedComponent);
	};
    return (
		<aside id="Matches" className={props.hidden && 'Hidden'}>
            <div class="Wrapper">
			<Navigation navItems={ruleNavItems} navId="MatchNav" selectNav={selectNav}/>
			<MatchInfo selected={selectedComponent}/>
			</div>
		</aside>
    );
};

export default AsideMatches;
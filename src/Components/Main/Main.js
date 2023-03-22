import React, {useState} from "react";
import Navigation from "../Navigation";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";


const Main = (props) => {
	const mainNav = ['Welcome', 'Teams', 'Learn Rugby'];
	const [selectedComponent, setSelectedComponent] = useState('welcome');
    return (
		<main id="Home" className={props.hidden && 'Hidden'}>
			<div className="Wrapper">
				<Navigation navItems={mainNav} navId="SecondNav" default={selectedComponent}/>
				<Welcome />
				<Teams />
				<Rules />
			</div>
		</main>
    );
};

export default Main;
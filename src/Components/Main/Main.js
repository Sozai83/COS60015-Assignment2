import React, {useState} from "react";
import Navigation from "../Navigation";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";


const Main = (props) => {
	const mainNav = ['Welcome', 'Teams', 'Learn Rugby'];
	const [selectedComponent, setSelectedComponent] = useState('Welcome');
	const selectnav = (event) => {
		const selected = event.target.dataset.nav;
		setSelectedComponent(selected);
		const elementPosition = document.getElementById(event.target.dataset.nav).getBoundingClientRect().top;
		window.scrollTo({
			top: elementPosition,
			behavior: 'auto', // gives an ease-in-out effect to our scroll
		});
	};
    return (
		<main id="Home" className={props.hidden && 'Hidden'}>
			<div className="Wrapper">
				<Navigation 
					navItems={mainNav}
					navId="SecondNav"
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
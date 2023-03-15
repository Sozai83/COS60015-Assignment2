import React from "react";
import MainNav from "./MainNav";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";


const Main = () => {
    return (
		<main id="home">
			<div className="MainSection">
				<MainNav />
				<Welcome />
				<Teams />
				<Rules />
			</div>
		</main>
    );
};

export default Main;
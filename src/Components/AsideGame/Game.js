import React from "react";
import GameNav from "./GameNav";
import GameInfo from "./GameInfo";
import '../../CSS/layout/matches.scss'

const Aside = () => {
    return (
		<aside id="Matches">
            <div class="Wrapper">
			<GameNav />
			<GameInfo />
			</div>
		</aside>
    );
};

export default Aside;
import React from "react";
import GameNav from "./GameNav";
import GameInfo from "./GameInfo";

const Aside = () => {
    return (
		<aside id="matches" class="">
            <div class="wrapper">
			<GameNav />
			<GameInfo />
			</div>
		</aside>
    );
};

export default Aside;
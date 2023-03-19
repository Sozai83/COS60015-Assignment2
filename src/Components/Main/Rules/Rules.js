import React from "react";
import RulesNav from "./RulesNav";
import RuleInfo from "./RuleInfo";
import '../../../CSS/layout/learn-rugby.scss'

const Main = () => {
    return (
		<section id="LearnRugby">
				<RulesNav />
                <RuleInfo />
		</section>
    );
};

export default Main;
import React, {useState} from "react";
import Navigation from "../../Navigation";
import RuleInfo from "./RuleInfo";
import '../../../CSS/layout/learn-rugby.scss'

const Main = () => {
    const ruleNavItems =  ["Beginner Rules", "Advance Rules", "Recent Changes"];
    const [selectedComponent, setSelectedComponent] = useState('beginner-rules');
    const selectNav = (event) => {
      setSelectedComponent(event ? event.target.dataset.nav : 'beginner-rules');
      console.log(selectedComponent);
    };
    return (
		<section id="LearnRugby">
				<Navigation navItems={ruleNavItems} selectNav={selectNav} />
        <RuleInfo selected={selectedComponent} />
		</section>
    );
};

export default Main;
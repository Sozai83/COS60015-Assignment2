import NavCreator from "../../NavCreator"

const RulesNav = () => {
    const ruleNavItems = ["Begineer Rules", "Advance Rules", "Recent Changes"];
    return NavCreator({NavItems: ruleNavItems});
}

export default RulesNav;

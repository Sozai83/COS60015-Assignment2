import NavCreator from "../NavCreator"

const GameNav = () => {
    const ruleNavItems = ["2023", "2022", "2021"];
    return NavCreator({NavItems: ruleNavItems, NavId :"MatchNav"});
}

export default GameNav;
import NavCreator from "../../NavCreator"

const Navigation = () => {
    const navItems = ["Matches", "Home", "Contact"];
    return NavCreator({NavItems: navItems, NavId :"TopNav"});
}

export default Navigation;

import NavCreator from "../NavCreator"

const MainNav = () => {
    const topNavItems = ["Welcome", "Teams", "Learn Rugby"];
    return NavCreator({NavItems: topNavItems, NavId :"SecondNav"});
}

export default MainNav;
import NavCreator from "./WithNavList"

const MainNav = ({ nav }) => {
    const topNavItems = ["Welcome", "Teams", "Learn Rugby"];
    return(
    <nav id={nav.id && nav.id}>
        <ul>
            {nav.items}
        </ul>
    </nav>);
}

export default NavCreator(MainNav);
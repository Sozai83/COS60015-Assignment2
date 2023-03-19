import React from "react";
import Subscription from "./Subscription"
import FooterBody from "./FooterBody/FooterBody"
import '../../CSS/layout/footer.scss'

const Footer = () => {
    return (
		<footer>
			<Subscription/>
			<FooterBody />
		</footer>
    );
};

export default Footer;

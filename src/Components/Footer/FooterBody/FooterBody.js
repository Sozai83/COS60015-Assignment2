import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

const Footer = () => {
    return (
		<section id="footer">
      <div class="wrapper">
        <FooterMenu />
        <FooterContact />
      </div>
		</section>
    );
};

export default Footer;

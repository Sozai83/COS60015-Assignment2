import React from "react";

const Footer = () => {
    return (
      <nav id="FooterNav">
        <div>
          <ul>
            <li data-nav="home-top">Home</li>
            <li data-nav="home-welcome">Welcome</li>
            <li data-nav="home-teams">Team</li>
            <li data-nav="home-learn_rugby">Learn Rugby</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="matches-top">Game</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="contact-top">Contact</li>
          </ul>
        </div>
      </nav>
    );
};

export default Footer;

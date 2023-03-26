import React from "react";
import {scrollToEl} from '../../../utils'


const Footer = ({selectMainComponent}) => {
  const body = document.querySelector("body");
    const moveTo = (event)=>{
      
      if (event.target.tagName === "LI"){
        let selected = event.target.dataset.nav.split('-');
        let topNav = selected[0];
        let position = selected[1];
        selectMainComponent(topNav);
        if(position === 'Top'){
            body.scrollIntoView();       
        }else{
          scrollToEl(position, null, true);
        }
      }
    }

    return (
      <nav id="FooterNav" onClick={moveTo}>
        <div>
          <ul>
            <li data-nav="Home-Top">Home</li>
            <li data-nav="Home-Welcome">Welcome</li>
            <li data-nav="Home-Teams">Team</li>
            <li data-nav="Home-LearnRugby">Learn Rugby</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="Matches-Top">Game</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="Contact-Top">Contact</li>
          </ul>
        </div>
      </nav>
    );
};

export default Footer;

import React from 'react'
import Navigation from './Navigation/Navigation'

const Header = () => {
  return (
		<header>
            <div className="logo">
                <div className="wrapper">
                    <img src="./img/teams/jpn.png" alt="Brave Blossoms Logo" />
                    <h4>Brave Blossoms Portal</h4>
                </div>
            </div>
			<Navigation />
        </header>
  );
}

export default Header

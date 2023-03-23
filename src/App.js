import React, {useState} from 'react';
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation';
import Main from "./Components/Main/Main";
import Matches from "./Components/AsideMatches/Matches";
import Contact from "./Components/AsideContact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
	const navItems = ["Matches", "Home", "Contact"];
	const [selectedComponent, setSelectedComponent] = useState('Home');
	const selectNav = (event) => {
		setSelectedComponent(event ? event.target.dataset.nav : 'Home');
	};
  return (
    <div className="App">
		<Header/>
		<div className="Wrapper">
            <Navigation 
				selectNav={selectNav}
				navItems={navItems}
				navId="TopNav"
				default={selectedComponent}
			/>
        </div>
		<Main hidden={selectedComponent !== 'Home'}/>
		<Matches hidden={selectedComponent !== 'Matches'}/>
		<Contact hidden={selectedComponent !== 'Contact'}/>
		<Footer />
    </div>
  );
}

export default App;
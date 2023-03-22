import React, {useState} from 'react';
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation';
import Main from "./Components/Main/Main";
import Matches from "./Components/AsideMatches/Matches";
import Contact from "./Components/AsideContact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
	const navItems = ["Matches", "Home", "Contact"];
	const [selectedComponent, setSelectedComponent] = useState('home');
	const selectNav = (event) => {
		setSelectedComponent(event ? event.target.dataset.nav : 'home');
	};
  return (
    <div className="App">
		<Header/>
		<div className="Wrapper">
            <Navigation selectNav={selectNav} navItems={navItems} navId="TopNav" default={selectedComponent}/>
        </div>
		<Main hidden={selectedComponent !== 'home'}/>
		<Matches hidden={selectedComponent !== 'matches'}/>
		<Contact hidden={selectedComponent !== 'contact'}/>
		<Footer />
    </div>
  );
}

export default App;
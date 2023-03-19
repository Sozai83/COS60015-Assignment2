import React from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Game from "./Components/AsideGame/Game";
import Contact from "./Components/AsideContact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
		<Header/>
		<Main />
		<Game />
		<Contact/>
		<Footer />
    </div>
  );
}

export default App;
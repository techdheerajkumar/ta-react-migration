import React from 'react';
import './App.scss';
import HeaderComponent from './Components/Header/HeaderComponent';
import FrontPageComponent from './Components/FrontPage/FrontPageComponent';
function App() {
	return (
		<div className="App">
			<HeaderComponent />
			<FrontPageComponent />
		</div>
	);
}

export default App;

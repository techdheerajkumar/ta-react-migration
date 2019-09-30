import React from 'react';
import './App.scss';
import HeaderComponent from './Components/Header/HeaderComponent';
import BannerComponent from './Components//Banner/BannerComponent';
import CustomerExperience from './Components/CustomerExperience/CustomerExperience';
import ServiceComponent from './Components/Services/ServicesComponent';

function App() {
	return (
		<div className="App">
			<HeaderComponent />
			<BannerComponent />
			<CustomerExperience />
			<ServiceComponent />
		</div>
	);
}

export default App;

import React from 'react';
import './App.scss';
import HeaderComponent from './Components/Header/HeaderComponent'
import BannerComponent from './Components//Banner/BannerComponent'
import CustomerExperience from './Components/CustomerExperience/CustomerExperience'

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
      <CustomerExperience></CustomerExperience>
    </div>
  );
}

export default App;

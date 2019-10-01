import React, { Component } from 'react';
import BannerComponent from './Banner/BannerComponent';
import CustomerExperience from './CustomerExperience/CustomerExperience';
import ServiceComponent from './Services/ServicesComponent';
require('../../Styles/style.scss');
export default class FrontPageComponent extends Component {
	render() {
		return (
			<div>
				<BannerComponent />
				<CustomerExperience />
				<ServiceComponent />
			</div>
		);
	}
}

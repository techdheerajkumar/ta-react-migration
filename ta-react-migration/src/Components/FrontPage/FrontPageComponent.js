import React, { Component } from 'react';
import BannerComponent from './Banner/BannerComponent';
import CustomerExperience from './CustomerExperience/CustomerExperience';
import ServiceComponent from './Services/ServicesComponent';
import RequestAuditComponent from './RequestAudit/RequestAuditComponent';
import BlogComponent from './Blogs/BlogComponent';
require('../../Styles/style.scss');
export default class FrontPageComponent extends Component {
	render() {
		return (
			<div>
				<BannerComponent />
				<CustomerExperience />
				<ServiceComponent />
				<RequestAuditComponent />
				<BlogComponent />
			</div>
		);
	}
}

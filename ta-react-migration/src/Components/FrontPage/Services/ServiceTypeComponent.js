import React, { Component } from 'react';
export default class ServiceTypeComponent extends Component {
	render() {
		return (
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="service-item">
					<img src={require('../../../assets/images/01_artificial-intelligence-balck.png')} alt="services" />
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

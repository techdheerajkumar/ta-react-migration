import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class AuditContent extends Component {
	constructor() {
		super();
		this.state = {
			isClicked: false
		};
	}
	render() {
		return (
			<div className="audit-content">
				<h2>Explore your customer experience ROI.</h2>
				<p>
					Understanding and optimizing the quality of your customer journey is the key to meeting and
					exceeding customer expectations and driving business growth.
				</p>
				<p>
					We have created an end to end complimentary customer experience audit that highlights key areas to
					help improve the way you engage, interact, and nurture your customers.
				</p>
				<p>
					The audit highlights several points of potential opportunities to maximize your revenues, improve
					your user experience, and increase conversions and retention. It includes your web presence coupled
					with a critical look at your commerce and digital marketing email campaign experiences.
				</p>
				<Link
					to="/request-an-audit"
					className={
						this.state.isClicked === true ? (
							'hide'
						) : 'Show' && window.location.pathname !== '/' ? (
							'hide'
						) : (
							'show'
						)
					}
					onClick={() => {
						return this.setState({ isClicked: true });
					}}
				>
					Request A free Audit
				</Link>
			</div>
		);
	}
}

export default AuditContent;

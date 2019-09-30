import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

require('../../Styles/style.scss');
class BannerComponent extends Component {
	render() {
		return (
			<Router>
				<div className="banner">
					<div className="container">
						<div className="banner-content">
							<h1>Intelligent customer experience</h1>
							<p>
								An award-winning digital strategy and transformation agency helping marketers innovate
								and deliver exceptional customer experiences.
							</p>
							<ul>
								<li>
									<Link to="/contact">Start a project</Link>
								</li>
								<li>
									<Link to="#customer_experience">checkout our solutions</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
export default BannerComponent;

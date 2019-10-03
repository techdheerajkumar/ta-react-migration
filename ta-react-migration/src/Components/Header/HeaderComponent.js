import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavigationComponent from './NavigationComponent';

require('../../Styles/header.scss');
class HeaderComponent extends Component {
	render() {
		return (
			<header className="header">
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<LogoComponent />
						<NavigationComponent />
					</nav>
				</div>
			</header>
		);
	}
}
export default HeaderComponent;

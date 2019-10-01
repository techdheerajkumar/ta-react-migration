import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavigationComponent from './NavigationComponent';

require('../../Styles/header.scss');
class HeaderComponent extends Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<LogoComponent />
					<NavigationComponent />
				</nav>
			</header>
		);
	}
}
export default HeaderComponent;

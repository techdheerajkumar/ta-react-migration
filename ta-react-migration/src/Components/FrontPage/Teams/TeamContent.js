import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamContent extends Component {
	render() {
		return (
			<div className="team-content">
				<h2>Join our team</h2>
				<p>
					Whether you start your career as an intern or seasoned veteran, TA Digital, is one of the very best
					companies to launch your career.
				</p>
				<p>
					We have progressive growth paths for each of our career tracks so you can expect to be always
					innovating, learning, and advancing your skills.
				</p>

				<p>What are you waiting for, Join TA Digital today!</p>
				<Link to="/careers.tadgital.com">Find careers</Link>
			</div>
		);
	}
}
export default TeamContent;

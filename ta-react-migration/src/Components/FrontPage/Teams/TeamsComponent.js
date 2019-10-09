import React, { Component } from 'react';
import TeamImage from './TeamImage';
import TeamsContent from './TeamContent';

class TeamsComponent extends Component {
	render() {
		return (
			<div className="teams">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-5 col-sm-12 ">
							<TeamImage />
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 ">
							<TeamsContent />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default TeamsComponent;

import React, { Component } from 'react';
import AuditContent from '../RequestAudit/AuditContent';
import AuditImage from './AuditImage';
import AuditForm from './AuditForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class RequestAuditComponent extends Component {
	render() {
		return (
			<Router>
				<div className="request-audit" id="request-audit">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<AuditContent />
							</div>
							<div className="col-md-6 col-sm-12">
								<Route
									exact
									path="/"
									render={() => {
										return <AuditImage />;
									}}
								/>
								<Route
									path="/request-an-audit"
									render={() => {
										return <AuditForm />;
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
export default RequestAuditComponent;

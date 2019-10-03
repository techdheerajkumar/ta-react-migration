import React, { Component } from 'react';
class AuditForm extends Component {
	render() {
		return (
			<div className="audit-toggle">
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputFirstName">First Name</label>
						<input type="text" className="form-control" id="exampleInputFirstName1" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputLastName">Last Name</label>
						<input type="text" className="form-control" id="exampleInputLastName1" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputOrganisation1">Organisation</label>
						<input type="password" className="form-control" id="exampleInputOrganisation1" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">Country</label>
						<select className="form-control" id="exampleFormControlSelect1">
							<option />
							<option>Country1</option>
							<option>Country2</option>
							<option>Country3</option>
							<option>Country4</option>
							<option>Country5</option>
						</select>
					</div>
					<div className="form-check">
						<input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">
							Agree
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default AuditForm;

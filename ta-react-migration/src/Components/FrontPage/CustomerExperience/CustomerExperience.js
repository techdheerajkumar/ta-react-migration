import React, { Component } from 'react';
class CustomerExperience extends Component {
	render() {
		return (
			<div className="customer-wrapper">
				<div className="customer-experience">
					<div className="container">
						<div className="customer-experience-content">
							<h2 className="heading-two">Accelerate with excellent customer experience.</h2>

							<div className="para-content">
								<p>
									TA Digital is an innovative digital transformation agency, specializing in
									delivering customer experience, commerce, and marketing solutions. For nearly two
									decades, we have been helping traditional businesses transform and create dynamic
									digital cultures through disruptive strategies and agile deployment of innovative
									solutions.
								</p>
								<p>
									We specialize in helping our clients exceed increasing customer expectations by
									leveraging people, processes, and technology. Helping them engineer an exceptional
									end to end customer experience that accelerates business growth.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="demo">
					<svg width="100%" height="150" viewBox="0 0 2000 150" preserveAspectRatio="none">
						<polygon stroke="blue" strokeWidth="0" fill="#f6f7f9" points="0 0, 1400 150, 2000 0" />
					</svg>
				</div>
			</div>
		);
	}
}
export default CustomerExperience;

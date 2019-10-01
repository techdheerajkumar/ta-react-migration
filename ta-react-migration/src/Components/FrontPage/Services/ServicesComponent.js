import React, { Component } from 'react';
import ServiceTypeComponent from './ServiceTypeComponent';
import { connect } from 'react-redux';
import ServiceHeadingComponent from './ServiceHeadingComponent';
import * as actionTypes from '../../../store/serviceAction';
import axios from 'axios';
class ServicesComponent extends Component {
	constructor() {
		super();
		this.state = {
			services: []
		};
	}
	componentDidMount() {
		fetch('./service.json').then((res) => res.json()).then((data) => {
			const services = data;
			this.setState({ services }, function() {
				console.log(this.state.services);
			});
		});
	}
	render() {
		return (
			<div className="services">
				<div className="container-fluid">
					<ServiceHeadingComponent />
					<div className="row">
						{this.state.services.map((data, id) => {
							return (
								<ServiceTypeComponent
									key={id}
									image={data.imgName}
									title={data.title}
									description={data.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
// const mapStateToProps = (state) => {
// 	// console.log(state);
// 	return {
// 		services: state
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		servicesTypes: (data) => dispatch(actionTypes.servicesTypes(data)) //Step 1
// 	};
// };
export default connect()(ServicesComponent);

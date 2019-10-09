import React, { Component } from 'react';
import PartnerHeading from './PartnerHeading';
import PartnerThumbnails from './PartnerThumbnails';
class PartnerComponent extends Component {
	constructor() {
		super();
		this.state = {
			thumbnails: []
		};
	}
	componentDidMount() {
		fetch('./partner-thumbnails.json').then((res) => res.json()).then((data) => {
			const thumbnails = data;
			this.setState({ thumbnails });
		});
	}
	render() {
		return (
			<div className="partners">
				<div className="container">
					<div className="row">
						<PartnerHeading />
						<ul>
							{this.state.thumbnails.map((data, id) => {
								return <PartnerThumbnails />;
							})}
						</ul>
					</div>
				</div>
				<svg width="100%" height="150" viewBox="0 0 2000 150" preserveAspectRatio="none">
					<polygon stroke="blue" strokeWidth="0" fill="#fff" points="0 0, 1400 150, 2000 0" />
				</svg>
			</div>
		);
	}
}
export default PartnerComponent;

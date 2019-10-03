import React, { Component } from 'react';

class BlogsItems extends Component {
	render() {
		return (
			<li className="blogs-items">
				<figure>
					<img src={require('../../../assets/images/Blog-Banner-Image-768x307.jpg')} alt="blog-item" />
				</figure>
				<div className="blog-items-content">
					<h4>{this.props.title}</h4>
					<p>{this.props.description}</p>
				</div>
			</li>
		);
	}
}
export default BlogsItems;

import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class BlogsIntro extends Component {
	render() {
		return (
			<Router>
				<div className="blogs-intro">
					<h2>Thought Leadership</h2>
					<p>
						Stay in the know with the industry best practices and insights to help you grow your business!
					</p>
					<Link to="/blogs">Read more blogs</Link>
				</div>
			</Router>
		);
	}
}
export default BlogsIntro;

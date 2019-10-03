import React, { Component } from 'react';
import BlogsIntro from './BlogsIntro';
import BlogsItems from './BlogsItems';
require('../../../Styles/style.scss');
class BlogComponent extends Component {
	constructor() {
		super();
		this.state = {
			blogs: []
		};
	}
	componentDidMount() {
		fetch('./blog-items.json').then((res) => res.json()).then((data) => {
			const blogs = data;
			this.setState({ blogs }, function() {
				console.log(this.state.blogs.length);
			});
		});
	}
	render() {
		return (
			<div className="blogs">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12">
							<BlogsIntro />
						</div>

						<div className="col-md-9 col-sm-12">
							<ul>
								{this.state.blogs.map((data, id) => {
									return (
										<BlogsItems
											key={id}
											// image={data.imgName}
											title={data.title}
											description={data.description}
										/>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BlogComponent;

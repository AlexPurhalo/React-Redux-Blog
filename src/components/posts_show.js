// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

// Shows single post data
class PostsShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const { post } = this.props; // this.props.title, this.props.categories, this.props.content

		// console.log(this.props.post);
		if (!post) return <div>Loading...</div>;

		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

// Storing state with data about single post to property
function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

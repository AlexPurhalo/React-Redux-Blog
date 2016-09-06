// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

// Shows single post data
class PostsShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id);
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
				<button
					onClick={this.onDeleteClick.bind(this)}
					className="btn btn-danger pull-xs-right">
					Delete</button>
			</div>
		);
	}
}

// Storing state with data about single post to property
function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

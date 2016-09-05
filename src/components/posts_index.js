// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { fetchPosts } from '../actions/index';

// Shows the all posts
class PostsIndex extends Component {
	// Action creator
	componentWillMount() {
		// console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map(post =>
			<li className="list-group-item" key={post.id}>
				<Link to={`posts/${post.id}`}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
				</Link>
			</li>
		)
	}

	// JSX rendering
	render() {
		return	(
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

// Maps state from reducer as properties
function mapStateToProps(state) {
	return { posts: state.posts.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

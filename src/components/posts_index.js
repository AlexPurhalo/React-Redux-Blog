// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPosts } from '../actions/index';

// Shows the all posts
class PostsIndex extends Component {
	// Action creator
	componentWillMount() {
		// console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPosts();
	}

	// JSX rendering
	render() {
		return	<div>List of blog posts</div>;
	}
}

export default connect(null, { fetchPosts })(PostsIndex);

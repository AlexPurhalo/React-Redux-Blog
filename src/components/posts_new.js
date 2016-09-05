// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Creates the posts
class PostsNew extends Component {
	render() {
		return <div>Create a new post</div>;
	}
}

export default connect(null)(PostsNew);

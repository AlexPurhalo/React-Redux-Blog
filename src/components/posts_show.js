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
		return <div>One post page, id: {this.props.params.id}</div>;
	}
}

export default connect(null, { fetchPost })(PostsShow);

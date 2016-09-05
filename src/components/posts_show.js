// Node modules import
import React, { Component } from 'react'

export default class PostsShow extends Component {
	render() {
		return <div>One post page, id: {this.props.params.id}</div>;
	}
}

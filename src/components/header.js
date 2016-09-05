// Node modules import
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';

// Shows header with navigation bar
export default class Header extends Component {
	// Navigation links
	renderLinks() {
		return [
			<li className="nav-item" key={1}>
				<IndexLink
					to="/"
					className="nav-link"
					activeClassName="active">
					Home</IndexLink>
			</li>,
			<li className="nav-item" key={2}>
				<Link
			to="posts/new"
			className="nav-link"
			activeClassName="active">
				New Post</Link>
			</li>
		]
	}

	// JSX rendering
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">React Blog</Link>
					<ul className="nav navbar-nav">
						{this.renderLinks()}
					</ul>
				</nav>
			</div>
		);
	}
}

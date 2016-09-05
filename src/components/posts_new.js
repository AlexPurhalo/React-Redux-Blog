// Node modules import
import React, { Component, PropTypes } from "react";
import {reduxForm} from "redux-form";
import {createPost} from "../actions/index";

// Creates the posts
class PostsNew extends Component {
	// Access to router using
	static contextTypes = {
		router: PropTypes.object
	};

	// Calling createPost function passing as parameter form's props and redirect to posts list
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => { this.context.router.push('/') });
	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const title = this.props.title; // console.log(title);
		// ...
		// const handleSubmit = this.props.handleSubmit

		// in ES6 "<input {...title} />" is "<input onChange={title.onChange} formProps={title} />";
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<fieldset className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input
						type="text"
						className="form-control"
						{...title } />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</fieldset>

				<fieldset className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input
						type="text"
						className="form-control"
						{...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</fieldset>

				<fieldset className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea
						className="form-control"
						{...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</fieldset>

				<button
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

// Fields validation
function validate(values) {
	const errors = {};

	if (!values.title) errors.title = 'Enter a username';
	if (!values.categories) errors.categories = 'Enter the categories';
	if (!values.content) errors.content = 'Enter some content';

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);

// How redux form works
// state === {
// 	form: {
// 		PostsNewForm: { title: '...', categories: '...', content: '... ' }
// 	}
// }


// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

// Creates the posts
class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const title = this.props.title; // console.log(title);
		// ...
		// const handleSubmit = this.props.handleSubmit

		// in ES6 "<input {...title} />" is "<input onChange={title.onChange} formProps={title} />";
		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
				<fieldset className="form-group">
					<label>Title</label>
					<input
						type="text"
						className="form-control"
						{...title } />
				</fieldset>

				<fieldset className="form-group">
					<label>Categories</label>
					<input
						type="text"
						className="form-control"
						{...categories} />
				</fieldset>

				<fieldset className="form-group">
					<label>Content</label>
					<textarea
						className="form-control"
						{...content} />
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

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// How redux form works
// state === {
// 	form: {
// 		PostsNewForm: { title: '...', categories: '...', content: '... ' }
// 	}
// }


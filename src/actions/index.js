// Node modules import
import axios from 'axios';

// Import of action types
import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from './types';


// API url with key to access send the requests
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=couldbeanything';

// Action to get all the posts from server
export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// Action to create a new post
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}

// Fetch single post
export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

// Post destroying
export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	}
}

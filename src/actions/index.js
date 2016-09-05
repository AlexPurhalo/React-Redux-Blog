// Node modules import
import axios from 'axios';

// Import of action types
import { FETCH_POSTS } from './types';


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

// Import of action types
import { FETCH_POSTS, FETCH_POST } from '../actions/types';

// Import of initial state
import { INITIAL_STATE } from './initial_state'

// Reducing function
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, posts: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.data };
		default:
			return state;
	}
}

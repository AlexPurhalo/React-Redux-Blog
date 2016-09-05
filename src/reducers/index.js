// Node modules import
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers import
import PostsReducer from './reducer_posts';

// Objects initialization
const rootReducer = combineReducers({
  posts: PostsReducer,
	form: formReducer
});

export default rootReducer;

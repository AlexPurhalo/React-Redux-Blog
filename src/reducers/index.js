// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import PostsReducer from './reducer_posts';

// Objects initialization
const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;

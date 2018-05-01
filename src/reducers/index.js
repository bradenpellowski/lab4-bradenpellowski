import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';

// import CountReducer from './count-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;

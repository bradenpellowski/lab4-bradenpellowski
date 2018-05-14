import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import authreducer from './auth-reducer';

// import CountReducer from './count-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: authreducer,
});

export default rootReducer;

import { ActionTypes } from '../actions';


const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state, { post: action.payload });
    case ActionTypes.FETCH_POSTS:
      return Object.assign({}, state, { all: action.payload });
    default:
      return initialState;
  }
};


export default PostsReducer;

import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://agile-beach-30317.herokuapp.com/api';


const API_KEY = '?key=b_pellowski';
// const API_KEY = '';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};

// const fields = {title: '', contents:'', tags: ''}

export function createPost(post, history) {
  // ActionCreator returns a function
  // that gets called by the middleware passing in dispatch to it as an argument
  return (dispatch) => {
    // const fields = { title: '', contents: '', tags: '' };
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      history.push('/');
      // dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log(error);
      // hit an error do something else!
    });
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}


export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called by the middleware passing in dispatch to it as an argument

  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch((error) => {
      console.log(error);
      // hit an error do something else!
    });
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      // console.log(ActionTypes.FETCH_POST);
      // console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Switch } from 'react-router';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';

// import Counter from './containers/counter';
// import Controls from './containers/controls';
import Navbar from './containers/navbar';
import Post from './containers/post';
import Posts from './containers/posts';
import NewPost from './containers/newPost';

import './style.scss';
// import App from './components/app';

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

//
// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink exact to="/">My Super Awesome Blog</NavLink></li>
//         <li><NavLink to="/posts/new">new post</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

const App = (props) => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('main'),
);

// ReactDOM.render(<App />, document.getElementById('main'));

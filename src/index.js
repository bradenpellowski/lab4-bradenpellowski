import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
// import { Switch } from 'react-router';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


import reducers from './reducers';

import Counter from './containers/counter';
import Controls from './containers/controls';

import './style.scss';
// import App from './components/app';

const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// we now wrap App in a Provider


const About = (props) => {
  return (
    <div> All there is to know about me
      // <Controls />
    </div>);
};
const Welcome = (props) => {
  return (
    <div>Welcome
      // <Counter />
    </div>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
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

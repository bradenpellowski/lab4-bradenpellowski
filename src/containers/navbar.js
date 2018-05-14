import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { signoutUser } from '../actions';

class Navbar extends Component {
  render() {
    if (this.props.authenticated) {
      return (

        <nav>
          <div className="header">
            <NavLink exact to="/">My Super Awesome Blog</NavLink>
          </div>
          <div className="header2">
            <NavLink padding="20px" to="/new"><input type="button" value="New Post" /></NavLink>
            Logout: <button value="logout" onClick={() => { this.props.signoutUser(this.props.history); }} />
          </div>
        </nav>


      );
    } else {
      return (
        <nav>
          <div className="header">
            <NavLink padding="20px" to="/signin"><input type="button" value="Sign In" /></NavLink>
          </div>
          <div className="header2">
            <NavLink padding="20px" to="/signup"><input type="button" value="Sign Up" /></NavLink>
          </div>
        </nav>
      );
    }
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { signoutUser })(Navbar));

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (

      <nav>
        <div className="header">
          <NavLink exact to="/">My Super Awesome Blog</NavLink>
        </div>
        <div className="header2">
          <NavLink padding="20px" to="/posts/new"><input type="button" value="New Post" /></NavLink>
        </div>
      </nav>


    );
  }
}

// connects particular parts of redux state to this components props
// const mapStateToProps = state => (
//   {
//     count: state.count,
//   }
// );

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default Navbar;

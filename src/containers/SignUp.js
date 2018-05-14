import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.create = this.create.bind(this);
  }

  create() {
    this.props.signupUser(
      {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
      },
      this.props.history,
    );
  }

  render() {
    return (
      <div>
        <input type="text" onChange={event => this.setState({ email: event.target.value })} />
        <input type="text" onChange={event => this.setState({ password: event.target.value })} />
        <input type="text" onChange={event => this.setState({ username: event.target.value })} />
        <input type="submit" value="sign up" onClick={this.create} />
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));

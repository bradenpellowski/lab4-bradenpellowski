import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions';

class SignIn extends Component {
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
    this.props.signinUser(
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
        <input type="submit" value="log in" onClick={this.create} />
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));

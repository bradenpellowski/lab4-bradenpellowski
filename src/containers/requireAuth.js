// import React from 'react';
import { connect } from 'react-redux';
import React, { Component } from 'react';


export default function (ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (this.props.authenticated === false) this.props.history.push('/signin');
    }

    componentWillUpdate() {
      if (!this.nextProps.authenticated) this.props.history.push('/signin');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  // mapStateToProps
  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}

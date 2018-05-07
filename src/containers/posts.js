import { NavLink, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('here');
    console.log(this.props.all);
    return (
      <div id="case">
        {this.props.all.map((post) => {
        return (

          <NavLink exact to={`/posts/${post.id}`}>
            <div key={post.id} id="container">
              <p className="header">{post.title}</p>
              <p className="header2">{post.tags}</p>

              <img alt=""src={post.cover_url} width="300px" height="300px" />
            </div>
          </NavLink>

        );
      })}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    all: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));

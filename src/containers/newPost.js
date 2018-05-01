import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
      cover_url: '',
    };
    this.create = this.create.bind(this);
  }

  create() {
    this.props.createPost(
      {
        title: this.state.title,
        tags: this.state.tags,
        content: this.state.content,
        cover_url: this.state.cover_url,
      },
      this.props.history,
    );
  }

  render() {
    return (
      <div className="note2">
        <div className="header">
          Title:<input type="text" onChange={event => this.setState({ title: event.target.value })} />
        </div>
        <div className="header2">
          Tags:<input type="text" onChange={event => this.setState({ tags: event.target.value })} />
        </div>
        <div>
        Content:<textarea className="textarea" onChange={event => this.setState({ content: event.target.value })} />
        </div>
        Cover URL:<input type="text" onChange={event => this.setState({ cover_url: event.target.value })} />
        <div>
          <input type="submit" value="create" onClick={this.create} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));

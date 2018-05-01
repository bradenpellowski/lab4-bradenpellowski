
import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
      cover_url: '',
      editing: false,
    };
    this.maketitle = this.maketitle.bind(this);
    this.updatetext = this.updatetext.bind(this);
    this.maketextcontainer = this.maketextcontainer.bind(this);
    this.edittoggle = this.edittoggle.bind(this);
    this.updatetitle = this.updatetitle.bind(this);
    this.savetoggle = this.savetoggle.bind(this);
    this.updatetags = this.updatetags.bind(this);
    this.maketags = this.maketags.bind(this);
    this.updatecoverurl = this.updatecoverurl.bind(this);
    this.makecoverurl = this.makecoverurl.bind(this);
    this.delete = this.delete.bind(this);
    this.saveedit = this.saveedit.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
    // console.log(this.state.id);
    // console.log(this.props.post);
  }

  saveedit() {
    if (this.state.editing) {
      return <i className="fa fa-check-square fa-fw" onClick={this.savetoggle} />;
    } else {
      return <i className="fa fa-pencil-square fa-fw" onClick={this.edittoggle} />;
    }
  }

  edittoggle() {
    this.setState({ editing: !this.state.editing });
  }

  savetoggle() {
    this.setState({ editing: !this.state.editing });
    this.props.updatePost({
      title: this.state.title, content: this.state.content, tags: this.state.tags, cover_url: this.state.cover_url, id: this.props.match.params.postID,
    });
  }

  updatetext(event) {
    this.setState({ content: event.target.value });
  }

  maketextcontainer() {
    if (this.state.editing) {
      return (
        <div className="textcontainer">Content:
          <textarea className="textarea" defaultValue={this.state.content} onChange={this.updatetext} placeholder={this.props.post.content} />
        </div>


      );
    } else {
      return (

        <div className="textcontainer" dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />

      );
    }
  }

  updatetitle(event) {
    this.setState({ title: event.target.value });
  }

  maketitle() {
    if (this.state.editing) {
      return (
        <div>Title:
          <input onChange={this.updatetitle} value={this.state.title} placeholder={this.props.post.title} />
        </div>
      );
    } else {
    // return <input type="text" onChange={this.updatetitle} value={this.props.note.title} placeholder="Name your note" required />;
      return <div >{this.props.post.title}</div>;
    }
  }

  updatetags(event) {
    this.setState({ tags: event.target.value });
  }

  maketags() {
    if (this.state.editing) {
      return (
        <div>Tags:
          <input onChange={this.updatetags} value={this.state.tags} placeholder={this.props.post.tags} />
        </div>
      );
    } else {
    // return <input type="text" onChange={this.updatetitle} value={this.props.note.title} placeholder="Name your note" required />;
      return <div >{this.props.post.tags}</div>;
    }
  }

  updatecoverurl(event) {
    this.setState({ cover_url: event.target.value });
  }

  makecoverurl() {
    if (this.state.editing) {
      return (
        <div>Cover url:
          <input onChange={this.updatecoverurl} value={this.state.cover_url} placeholder={this.props.post.cover_url} />
        </div>
      );
    } else {
    // return <input type="text" onChange={this.updatetitle} value={this.props.note.title} placeholder="Name your note" required />;
      return <div ><img alt=""src={this.props.post.cover_url} width="300px" height="300px" /></div>;
    }
  }

  delete() {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }


  render() {
    return (
      <div className="note2">
        <div className="header">
          {this.maketitle()}

          <div className="hright">
            Edit/Save:{this.saveedit()}
            Delete:<i className="fa fa-window-close fa-fw" onClick={this.delete} />
          </div>

        </div>
        <div className="header2">
          {this.maketags()}
        </div>
        {this.maketextcontainer()}
        {this.makecoverurl()}
      </div>

    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));

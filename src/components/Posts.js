import React, { Component } from "react";
class Posts extends Component {
  render() {
    return this.props.posts.map(func => (
      <div className="row">
        <p className="col s9">{"kommentti:" + func.title}</p>
        <p className="col s1">{func.postid}</p>
        <p className="col s2">asdasd</p>
      </div>
    ));
  }
}
export default Posts;

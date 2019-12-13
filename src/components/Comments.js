import React, { Component } from "react";
import "./kstyles.css";
class Comments extends Component {
  state = {
    Comment: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.Comments([this.state.Comment]);
    this.setState({ Comment: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s5">
              <input
                id="username"
                type="text"
                name="Comment"
                value={this.state.Comment}
                onChange={this.onChange}
                // class="validate"
              />
              <label for="username">Username</label>
            </div>
            <button
              className="input-field bb col s2 waves-effect waves-light"
              type="submit"
              name="action"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Comments;

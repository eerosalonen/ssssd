import React, { Component } from "react";
import "./kstyles.css";
class Logout extends Component {
  state = {
    log: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({ log: "out" });
    this.props.Logout([this.state.log]);
    this.setState({ log: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <div id="kayt1" className="col s9 z-depth-2">
          Et ole kirjautunut
        </div>
        <form>
          <button
            className="input-field bb col s3 z-depth-4 waves-effect waves-light"
            type="submit"
            name="action"
          >
            LOGOUT
          </button>
        </form>
      </div>
    );
  }
}
export default Logout;

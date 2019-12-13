import React, { Component } from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";
import Kayttaja from "./components/Kayttaja";
import KayttajaI from "./components/KayttajaI";
import Comments from "./components/Comments";
import "./styles.css";

//var update = require("react-addons-update"); // ES5 with npm

class App extends Component {
  state = {
    posts: [
      {
        postid: "pertti",
        title: "juju"
      }
    ],
    users: [
      {
        userN: "1",
        userP: "juju"
      }
    ]
  };

  Comments = com => {
    console.log(com);
    const newPost = {
      postid: "joo",
      title: "wewqe"
    };
    this.setState({ posts: [...this.state.posts, newPost] });
  };
  //log in
  Kayttaja = kay => {
    for (let i = 0; i < this.state.users.length; i++) {
      console.log(kay[0]);
      console.log(this.state.users[i].userN);
      console.log(kay[1]);
      console.log(this.state.users[i].userP);
      if (
        this.state.users[i].userN === kay[0] &&
        this.state.users[i].userP === kay[1]
      ) {
        document.getElementById("userInfo").classList.add("hidden");
        document.getElementById("posts").classList.remove("hidden");
        document.getElementById("commentBar").classList.remove("hidden");
        document.getElementById("kayt").innerHTML =
          "Tervetuloa " + kay[0] + "!";
      }
    }
    if (document.getElementById("posts").classList.contains("hidden")) {
      document.getElementById("kayt").innerHTML =
        "väärä käyttäjä nimi tai salasana.";
    }
  };
  //sign in
  KayttajaI = kayI => {
    console.log(kayI);
    const newUser = {
      userN: kayI[0],
      userP: kayI[1]
    };
    this.setState({ users: [...this.state.users, newUser] });
  };
  render() {
    return (
      <div className="App">
        <div className="body s10">
          <div className="row">
            <h1 className="col s3 offset-s5">H</h1>
          </div>
          <div className="row">
            <div id="kayt" className="col s12">
              Et ole kirjautunut
            </div>
            <div id="userInfo">
              <Kayttaja Kayttaja={this.Kayttaja} />
              <KayttajaI KayttajaI={this.KayttajaI} />
            </div>
            <div id="commentBar" className="hidden">
              <Comments Comments={this.Comments} />
            </div>
          </div>
          <div className="row">
            <div className="col s2">fd</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
            <div className="col s2">1</div>
          </div>
          <div id="posts" className="hidden">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

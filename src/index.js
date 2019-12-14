import React, { Component } from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";
import Kayttaja from "./components/Kayttaja";
import KayttajaI from "./components/KayttajaI";
import Comments from "./components/Comments";
//import Logout from "./components/Logout";
import "./styles.css";

//var update = require("react-addons-update"); // ES5 with npm

class App extends Component {
  state = {
    logi: { log: "" },
    posts: [
      {
        postid: "",
        title: " This is the live chat! Post something.",
        time: ""
      }
    ],
    users: [
      {
        userN: "",
        userP: "",
        log: ""
      }
    ]
  };
  funaction(l) {
    this.setState(newState => ({
      users: newState.users.map(el =>
        el.userN === l ? { ...el, log: "out" } : el
      )
    }));
  }
  funbtion(i) {
    this.setState(newState => ({
      users: newState.users.map(el =>
        el.userN === i ? { ...el, log: "in" } : el
      )
    }));
    console.log(this.state.users);
    //console.log(newState);
  }
  logout(e) {
    e.preventDefault();
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].log === "in") {
        this.funaction(this.state.users[i].userN);
        document.getElementById("userInfo").classList.remove("hidden");
        document.getElementById("posts").classList.add("hidden");
        document.getElementById("commentBar").classList.add("hidden");
        document.getElementById("logoutBar").classList.add("hidden");
        document.getElementById("kayt").classList.remove("hidden");
        document.getElementById("kayt").innerHTML = "Olet kirjautunut ulos.";
      }
    }
  }
  Comments = com => {
    for (let i = 0; i < this.state.users.length; i++) {
      console.log(this.state.users[i]);
      if (this.state.users[i].log === "in") {
        if (com[0].length <= 74) {
          const newPost = {
            postid: this.state.users[i].userN,
            title: com[0],
            time: new Date().toUTCString()
          };
          this.setState({ posts: [...this.state.posts, newPost] });
        } else {
          alert("Hello! Your comment exeeds max length!");
        }
      }
    }
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
        this.setState({ ...this.state.users[i], log: "in" });
        this.funbtion(this.state.users[i].userN);
        document.getElementById("userInfo").classList.add("hidden");
        document.getElementById("posts").classList.remove("hidden");
        document.getElementById("commentBar").classList.remove("hidden");
        document.getElementById("logoutBar").classList.remove("hidden");
        document.getElementById("kayt").classList.add("hidden");
        // document.getElementById("kayt1").classList.remove("hidden");
        //document.getElementById("kayt1").innerHTML =
        //  "Tervetuloa " + kay[0] + "! ";
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
      userP: kayI[1],
      log: "out"
    };
    this.setState({ users: [...this.state.users, newUser] });
  };
  render() {
    return (
      <div className="App">
        <div className="body s10">
          <div className="row">
            <h1 id="Title" className="col s6 offset-s3 z-depth-5">
              CHÄTTI
            </h1>
          </div>

          <div className="row">
            <div id="kayt" className="col s12 z-depth-2">
              Et ole kirjautunut
            </div>
            <div id="logoutBar" className="hidden">
              <form>
                <button
                  className="input-field bb col s3 z-depth-4 waves-effect waves-light"
                  onClick={e => this.logout(e)}
                >
                  LOGOUT
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div id="userInfo">
              <Kayttaja Kayttaja={this.Kayttaja} />
              <KayttajaI KayttajaI={this.KayttajaI} />
            </div>
            <div id="commentBar" className="hidden">
              <Comments Comments={this.Comments} />{" "}
            </div>
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

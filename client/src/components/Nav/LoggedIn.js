import React from "react";
import * as firebase from "firebase";

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link" onClick={this.handleClick} href="/" >
            Logout
          </a>
        </li>
      </>
    );
  }
}
export default LoggedIn;

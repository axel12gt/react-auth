import React from "react";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.props.loggedIn 
            ? <LoggedIn />
            : <NotLoggedIn />
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
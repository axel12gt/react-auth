import React from "react";

function NotLoggedIn() {
    return (
        <>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
        </>
    )
}

export default NotLoggedIn;
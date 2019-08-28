import React from "react";
import * as firebase from "firebase";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from "react-router-dom";

class Login extends React.Component {


  componentDidMount() {
    const btnLogin = document.getElementById("btnLogin");
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");

    btnLogin.addEventListener("click", e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
  }

  
  render() {
      return (
        <>
          <label>Email </label>
          <input id="txtEmail" type="email" placeholder="Email" />
          <br />
          <label>Password</label>
          <input id="txtPassword" type="password" placeholder="password" />
          <button id="btnLogin" type="submit">
            Login
          </button>
        </>
      )
  }
}

export default Login;

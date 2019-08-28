import React from "react";
import * as firebase from "firebase";

class SignUp extends React.Component {
  componentDidMount() {
    const txtPassword = document.getElementById("txtPassword")
    const txtEmail = document.getElementById("txtEmail");
    const btnSignUp = document.getElementById("btnSignUp");

    btnSignUp.addEventListener("click", e => {
      // TODO: check for real
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.createUserWithEmailAndPassword(email, pass);
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
        <button id="btnSignUp" type="submit">
          sign up
        </button>
      </>
    );
  }
}

export default SignUp;


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvIHTSShHzACo5RNfolHD8bkVRo5gdXYo",
    authDomain: "react-auth-ed1ed.firebaseapp.com",
    databaseURL: "https://react-auth-ed1ed.firebaseio.com",
    projectId: "react-auth-ed1ed",
    storageBucket: "",
    messagingSenderId: "869023195658",
    appId: "1:869023195658:web:d9843208d3fce676"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

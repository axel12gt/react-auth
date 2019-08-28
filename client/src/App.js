import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import "./App.css";
import * as firebase from "firebase";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false,
    };
  }

  PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      this.state.logged 
      ? <Component {...props} /> 
      : <Redirect to ="/login" />
    )}/>
  )


  componentDidMount() {
      firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        // console.log("is logged in")
        this.setState({logged: true})
      } else {
        // console.log("not logged in");
        this.setState({logged: false})
      }
    });
    const rootRef = firebase
      .database()
      .ref()
      .child("react");
    const speedRef = rootRef.child("speed");
    // console.log(speedRef);
    speedRef.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    console.log(this.state.logged)
    return (
      <>
        <Router>
          <div>
          <Nav loggedIn={this.state.logged} />
            <div className="container">
              <Switch>
                <Route exact path="/login" 
                render={props => <Login {...props} exra={this.state.logged} />} />
                <Route exact path="/signup" component={SignUp} />
                {/* <this.PrivateRoute exact path="/private" component={Private}/> */}
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'
import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class App extends Component  {
  constructor() {
    super()

    this.state = {
      signin: false,
      singup: false
    }
  }

  signInClick = () => {
    this.setState({signin: !this.state.signin})
  }

  signUpClick = () => {
    this.setState({signup: !this.state.signup})
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        {this.state.signin === true ? <SignIn/> : <Button onClick={this.signInClick}>Sign In</Button>}
        {this.state.signup === true ? <SignUp/> : <Button onClick={this.signUpClick}>Sign Up</Button>}
      </div>
    );
  }
}

export default App;

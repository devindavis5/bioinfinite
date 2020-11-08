import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class App extends Component  {
  constructor() {
    super()

    this.state = {
      categories: []
    }
  }

  signInClick = (e) => {
    e.preventDefault()
    const { history } = this.props
    history.push('/signin')
  }

  signUpClick = (e) => {
    e.preventDefault()
    const { history } = this.props
    history.push('/signup')
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Button onClick={this.signInClick}>Sign In</Button>
        <Button onClick={this.signUpClick}>Sign Up</Button>
      </div>
    );
  }
}

export default App;

import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Bio from './assets/biologo.png'

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
      <div className="homepage" >
        <div className="title">
            <img className="align-center" src={Bio}/>
        </div>
        <div className="login-button">
          <Button onClick={this.signInClick} variant="outline-info" >Sign In</Button>
          <div className="divider"/>
          <Button onClick={this.signUpClick} variant="outline-info" >Sign Up</Button>  
        </div>
      </div>
    );
  }
}

export default App;

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
        <div className="title">
            <h1 >Life Science</h1>
        </div>
        <div className="login-button">
          <Button onClick={this.signInClick} size="lg">Sign In</Button>
          <div className="divider"/>
          <Button onClick={this.signUpClick} size="lg" >Sign Up</Button>  
        </div>
      </div>
    );
  }
}

export default App;

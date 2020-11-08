import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    onChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { history } = this.props
        console.log(this.state.username)
        history.push('/maincontainer')
    }

    render() {
        return (
            <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" onChange={this.onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>
                <Button to="/maincontainer" onClick={this.onSubmit} variant="primary" type="submit">Create Account</Button>
            </Form>
        </div>
        )
    }
}

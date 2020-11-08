import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SignIn extends Component {
    constructor() {
        super()

        this.state = {
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
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button to="/maincontainer" onClick={this.onSubmit} variant="primary" type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}

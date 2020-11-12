import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
import UserShowPanel from '../components/UserShowPanel.js'
import img from '../assets/back-arrow.png'

export default class TopicShowPageNavBar extends Component {
    
    state = {
        profile: false
    }

    profile = () => {
        this.setState({profile: !this.state.profile})
        console.log('clicked')
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    mainContainer = () => {
        const history = this.props.history
        // history.push({pathname: `/maincontainer`, state: { user: this.props.user}})
        history.goBack()
    }

    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Navbar.Brand href="/home">Life Science</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.mainContainer} ><img width="25" height="25" className="d-inline-block align-top" alt="back" src={img}/></Nav.Link>
                        <Nav.Link onClick={this.profile} >My Account</Nav.Link>
                        <Nav.Link onClick={this.logout} >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {this.state.profile ? <UserShowPanel user={this.props.user} profile={this.profile} /> : null}
            </div>
        )
    }
}



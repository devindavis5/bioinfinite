import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import UserShowPanel from '../components/UserShowPanel.js'
import Logo from '../assets/biologo2.png'

export default class NavBar extends Component {
    
    state = {
        profile: false
    }

    profile = () => {
        this.setState({profile: !this.state.profile})
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            <div>
            <Navbar className="nav-bar2" collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Navbar.Brand href="/home"><img width="23" height="23" className="d-inline-block align-center" id="logo" alt="back" src={Logo}/> BioInfinite</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link onClick={this.profile} >My Account</Nav.Link>
                        <Nav.Link onClick={this.logout} >Logout</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search Topics" onChange={(e) => this.props.setSearch(e.target.value)}className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
                {this.state.profile ? <UserShowPanel user={this.props.user} profile={this.profile} /> : null}
            </div>
        )
    }
}

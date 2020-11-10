import React, {Component} from 'react';
// import SearchBar from './SearchBar.js'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import UserShowPanel from '../components/UserShowPanel.js'


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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand href="/home">Life Science</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#pricing" onClick={this.profile} >My Account</Nav.Link>
                        {/* <Nav.Link href="#pricing">Quiz History</Nav.Link> */}
                        <Nav.Link href="#pricing" onClick={this.logout} >Logout</Nav.Link>
                        {/* <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">View Quiz History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">View Account Info</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search Topics" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
                {this.state.profile ? <UserShowPanel profile={this.profile} /> : null}
            </div>
        )
    }
}

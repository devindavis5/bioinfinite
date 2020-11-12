import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../assets/kemptons-blank-profile-picture.jpg'
import Moment from 'react-moment'
import ListGroup from 'react-bootstrap/ListGroup'

export default class UserShowPanel extends Component {

    render() {
        const user = this.props.user
        return (
            <div className="position-absolute" style={{zIndex:10}}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <small className="text-muted">___________________________________________</small>
                </Card.Body>
                <Card.Body>
                    <ListGroup variant="flush">
                    <ListGroup.Item className="text-info">Email:</ListGroup.Item>
                    <ListGroup.Item>{user.email}</ListGroup.Item>
                    <ListGroup.Item className="text-info">Member Join Date:</ListGroup.Item>
                    <ListGroup.Item><Moment format="MMMM DD, YYYY" trim="true">{user.created_at}</Moment></ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-secondary float-right" onClick={() => this.props.profile()} size="sm">Close</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

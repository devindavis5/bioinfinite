import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../assets/kemptons-blank-profile-picture.jpg'
import Moment from 'react-moment'

export default class UserShowPanel extends Component {

    render() {
        const user = this.props.user
        return (
            <div className="position-absolute">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                    <Card.Text>Joined: <Moment format="MMMM DD, YYYY" trim>{user.created_at}</Moment></Card.Text>
                    <Button variant="outline-secondary float-right" onClick={() => this.props.profile()} size="sm">Close</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

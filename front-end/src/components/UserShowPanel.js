import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../assets/kemptons-blank-profile-picture.jpg'

export default class UserShowPanel extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>User Name</Card.Title>
                    <Card.Text>
                    User Email
                    Joined Date ?
                    Lessons Read ? Num/Total
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={() => this.props.profile()} size="sm">Close</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

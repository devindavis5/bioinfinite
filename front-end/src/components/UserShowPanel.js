import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class UserShowPanel extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="front-end/public/assets/kemptons-blank-profile-picture.jpg" />
                <Card.Body>
                    <Card.Title>User Name</Card.Title>
                    <Card.Text>
                    User Email
                    Joined Date ?
                    Lessons Read ? Num/Total
                    </Card.Text>
                    <Button variant="outline-secondary" size="sm">Exit</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

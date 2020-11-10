import React, {Component} from 'react';
import SubCategoryShowPage from './SubCategoryShowPage.js'
// import QuizForm from './QuizForm.js'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

export default class TopicShowPage extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        For each subcategory...
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Subcategory Body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Extra
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <SubCategoryShowPage />
            </div>
        )
    }
}
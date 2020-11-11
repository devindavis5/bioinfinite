import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

export default class SubCategoryShowPage extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        {this.props.subcategory.name}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>{this.props.subcategory.description}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}
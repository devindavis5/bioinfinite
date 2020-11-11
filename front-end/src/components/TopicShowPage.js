import React, {Component} from 'react';
import SubCategoryShowPage from './SubCategoryShowPage.js'
// import QuizForm from './QuizForm.js'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import TopicShowPageNavBar from './TopicShowPageNavBar.js'

export default class TopicShowPage extends Component {
    constructor() {
        super()

        this.state = {
            subcategories: [],
            category: {}
        }
    }       

    componentDidMount() {
        fetch(`http://localhost:3000/sub_categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(subcategories => this.setState({subcategories})) 

         fetch(`http://localhost:3000/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(category => this.setState({category}))
    }
 
    render() {
        return (
            <div>
                <TopicShowPageNavBar/>
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
                <div>
                <Card className="text-center" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title as="h1">{this.state.category.name}</Card.Title>
                </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Text as="h6">{this.state.category.introduction}</Card.Text>
                </Card.Body>
                </Card>
                </div>
                <div>
                    {this.state.subcategories.map(s => {
                    return (
                    <SubCategoryShowPage subcategory={s} key={s.id} />)})}
                </div>
            </div>
        )
    }
}
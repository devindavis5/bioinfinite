import React, {Component} from 'react';
import SubCategoryShowPage from './SubCategoryShowPage.js'
// import QuizForm from './QuizForm.js'
import Card from 'react-bootstrap/Card'

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
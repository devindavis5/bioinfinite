import React, {Component} from 'react';
import SubCategoryShowPage from './SubCategoryShowPage.js'
// import QuizForm from './QuizForm.js'
import Card from 'react-bootstrap/Card'
import TopicShowPageNavBar from './TopicShowPageNavBar.js'
import Cells from '../assets/cells.png'
import Macromolecules from '../assets/macromolecules.png'
import Metabolism from '../assets/metabolism.png'
import Photosynthesis from '../assets/photosynthesis.png'
import DNA from '../assets/dna.png'

export default class TopicShowPage extends Component {
    constructor() {
        super()

        this.state = {
            subcategories: [],
            category: {},
        }
    }       

    componentDidMount() {
        fetch(`http://localhost:3000/sub_categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(subcategories => this.setState({subcategories})) 

         fetch(`http://localhost:3000/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(category => {
            this.setState({category})

        })
    }

    findSource = () => {
        let source
        let name = this.state.category.name
        if (name === 'Cells') {
            source = Cells
        } else if (name === 'Macromolecules') {
            source = Macromolecules
        } else if (name === 'Metabolism') {
            source = Metabolism
        } else if (name === 'Photosynthesis') {
            source = Photosynthesis
        } else if (name === 'DNA Replication') {
            source = DNA
        }
        return source
    }

 
    render() {
        return (
            <div>
                <TopicShowPageNavBar user={this.props.location.state.user} history={this.props.history} />
                <div>
                <Card className="text-center" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title as="h1"><img width="35" height="35" className="d-inline-block align-center" alt="back" src={this.findSource()}/> {this.state.category.name}</Card.Title>
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
import React, {Component} from 'react';
// import Category from './Category.js'
import Carousel from 'react-bootstrap/Carousel'
// import img from '../assets/cool-background.jpg'
import Card from 'react-bootstrap/Card'
// import TopicShowPageNavBar from './TopicShowPageNavBar.js'
import Cells from '../assets/cellsb.jpg'
import Macromolecules from '../assets/macromoleculesb.jpg'
import Metabolism from '../assets/metabolismb.jpg'
import Photosynthesis from '../assets/photosynthesisb.jpg'
import DNA from '../assets/dnab.jpg'

export default class CarouselComponent extends Component {
    
    handleClick = (categoryID) => {
        // window.location.href = `/category/${categoryID}`
        const history = this.props.history
        history.push({pathname: `/category/${categoryID}`, state: { user: this.props.user }})
    }

    findSource = (name) => {
        let source
        if (name === 'Cells') {
            source = Cells
        } else if (name === 'Macromolecules') {
            source = Macromolecules
        } else if (name === 'Metabolism') {
            source = Metabolism
        } else if (name === 'DNA Replication') {
            source = DNA
        } else if (name === 'Photosynthesis') {
            source = Photosynthesis
        }
        return source
    }
//   <img variant="top" id="avatar" src={this.findSource(c.name)} />
    render() {
        return (
            <div className="carousel"  style={{zIndex:3}}>
                  <Carousel>
                {this.props.categories.map(c => {
                    return (
                    <Carousel.Item className="slide" onClick={() => this.handleClick(c.id)}>
                    <img
                    className="d-block w-100"
                    src={this.findSource(c.name)}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="bree2" >{c.name}</h1>
                    </Carousel.Caption>
                </Carousel.Item>  
                    ) 
                })}
                </Carousel>
                <h1 className="none">{this.props.categories[0] === undefined ? 'There are no topics by that name.' : null }</h1>
            </div>    
        )
    }
}

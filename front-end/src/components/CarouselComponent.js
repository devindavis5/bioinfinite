import React, {Component} from 'react';
// import Category from './Category.js'
import Carousel from 'react-bootstrap/Carousel'
import img from '../assets/cool-background.jpg'

export default class CarouselComponent extends Component {
    
    handleClick = (categoryID) => {
        // window.location.href = `/category/${categoryID}`
        const history = this.props.history
        history.push({pathname: `/category/${categoryID}`, state: { user: this.props.user }})
    }
  
    render() {
        return (
            <div>
                <h1 className="none">{this.props.categories[0] === undefined ? 'There are no topics by that name.' : null }</h1>
                  <Carousel>
                {this.props.categories.map(c => {
                    return (
                    <Carousel.Item className="slide" onClick={() => this.handleClick(c.id)}>
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{c.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>  
                    ) 
                })}
                </Carousel>  
            </div>
        )
    }
}

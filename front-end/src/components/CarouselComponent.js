import React, {Component} from 'react';
// import Category from './Category.js'
import Carousel from 'react-bootstrap/Carousel'
import img from '../assets/cool-background.png'

export default class CarouselComponent extends Component {
    
        // state = {
        //     categories: this.props.categories
        // }
    
    handleClick = (categoryID) => {
        // window.location.href = `/category/${categoryID}`
        const history = this.props.history
        history.push({pathname: `/category/${categoryID}`, state: { user: this.props.user }})
    }
  
    render() {
        // const c = this.props.categories
        // console.log(c)
        return (
            <div>
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
                {/* {this.props.categories.map(category => {
                    return <Category category={category} history={this.props.history} key={category.id} user={this.props.user}/>
                })} */}
            </div>
        )
    }
}

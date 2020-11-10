import React, {Component} from 'react';
import Carousel from '../components/Carousel.js'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import UserShowPanel from '../components/UserShowPanel.js'

export default class MainContainer extends Component {

    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/categories").then(res => res.json())
        .then(categories => this.setState({categories}))
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <h1>MainContainer Component</h1>
                <Carousel categories={this.state.categories}/>
                <Footer />
                <UserShowPanel/>
                
            </div>
        )
    }
}

import React, {Component} from 'react';
import Carousel from '../components/Carousel.js'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

export default class MainContainer extends Component {

    constructor() {
        super()
        this.state = {
            categories: [],
            search: ''
        }
    }

    setSearch = (input) => {
        let search = input.toLowerCase()
        this.setState({search})
    }

    componentDidMount() {
        fetch("http://localhost:3000/categories").then(res => res.json())
        .then(categories => this.setState({categories}))
    }
    
    render() {
        const categories = this.state.categories.filter(c => c.name.toLowerCase().includes(this.state.search))
        return (
            <div>
                <NavBar setSearch={this.setSearch}/>
                <Carousel categories={categories}/>
                <Footer />
            </div>
        )
    }
}

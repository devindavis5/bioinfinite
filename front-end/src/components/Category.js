import React, {Component} from 'react';
import TopicShowPage from './TopicShowPage';

export default class Category extends Component {
    
    handleClick = (categoryID) => {
        window.location.href = `/category/${categoryID}`
    }

    render() {

        let category = this.props.category
        return (
            <div onClick={() => this.handleClick(category.id)}>
                <h1>Category Component</h1>
                <p>{category.name}</p>
                {/* <TopicShowPage/> */}
            </div>
        )
    }
}
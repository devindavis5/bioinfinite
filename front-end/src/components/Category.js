import React, {Component} from 'react';


export default class Category extends Component {
    
    handleClick = (categoryID) => {
        // window.location.href = `/category/${categoryID}`
        const history = this.props.history
        history.push({pathname: `/category/${categoryID}`, state: { user: this.props.user}})
    }

    render() {

        let category = this.props.category
        return (
            <div onClick={() => this.handleClick(category.id)}>
                <h3>{category.name}</h3>
            </div>
        )
    }
}
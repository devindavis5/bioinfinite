import React, {Component} from 'react';
import Category from './Category.js'

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <h1>Carousel Component</h1>
                {this.props.categories.map(category => {
                    return <Category category={category} history={this.props.history} key={category.id} user={this.props.user}/>
                })}
            </div>
        )
    }
}

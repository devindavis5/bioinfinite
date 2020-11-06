import React, {Component} from 'react';
import SearchBar from './SearchBar.js'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>NavBar Component</h1>
                <SearchBar />
            </div>
        )
    }
}

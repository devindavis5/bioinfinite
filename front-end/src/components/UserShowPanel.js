import React, {Component} from 'react';
import QuizHistory from './QuizHistory.js'

export default class UserShowPanel extends Component {
    render() {
        return (
            <div>
                <h1>UserShowPanel Component</h1>
                <QuizHistory/>
            </div>
        )
    }
}

import React, {Component} from 'react';
import Question from './Question.js';

export default class QuizForm extends Component {
    render() {
        return (
            <div>
                <h1>QuizForm Component</h1>
                <Question/>
            </div>
        )
    }
}
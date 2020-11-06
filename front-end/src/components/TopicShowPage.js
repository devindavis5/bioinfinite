import React, {Component} from 'react';
import SubCategoryShowPage from './SubCategoryShowPage.js'
import QuizForm from './QuizForm.js'

export default class TopicShowPage extends Component {
    render() {
        return (
            <div>
                <h1>TopicShowPage Component</h1>
                <SubCategoryShowPage />
                <QuizForm />
            </div>
        )
    }
}
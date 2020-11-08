import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from './containers/MainContainer.js';
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'
import TopicShowPage from './components/TopicShowPage';

ReactDOM.render(
  <Router>
        <Route exact path='/' component={App}/>
        <Route exact path='/maincontainer' component={MainContainer}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/category/:id' component={TopicShowPage}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

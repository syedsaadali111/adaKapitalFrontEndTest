import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {HashRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/util/ScrollToTop';

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <App/>
    </Router>,
    document.getElementById('root')
);
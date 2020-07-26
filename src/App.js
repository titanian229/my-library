import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Search from './pages/Search';
import Saved from './pages/Saved';

import AOS from 'aos';

import './styles/global.scss';

function App() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Router>
            <div>
                <Route exact path="/" component={Search} />
                <Route exact path="/mylibrary" component={Saved} />
            </div>
        </Router>
    );
}

export default App;

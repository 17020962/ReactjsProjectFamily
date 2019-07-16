import React from 'react';
import './App.css';
import './all.js';

import Home from './pages/Home';
import News from './pages/News';
import ReadNews from './pages/ReadNews';
import Contact from './pages/Contact';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/news/page/:slug" component={News} />
                <Route exact path="/news/:slug" component={ReadNews} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
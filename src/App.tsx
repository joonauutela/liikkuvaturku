import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Locations from './views/Locations';
import ExerciseInfo from './views/ExerciseInfo';
import LocationInfo from './views/LocationInfo';

import NavController from './components/NavController/NavController';
import Footer from './components/Footer/Footer';

import './App.css';

const App: React.FC = () => {
    return (
        <Router >
            <div className="App">
                <NavController />
                <Switch>
                    <Route path="/locations/:id">
                        <LocationInfo />
                    </Route>
                    <Route path="/locations">
                        <Locations />
                    </Route>
                    <Route path="/exerciseinfo">
                        <ExerciseInfo />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
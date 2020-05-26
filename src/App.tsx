import './App.css';
import React, { useEffect } from "react";
import Header from './components/Header';
import Home from './views/Home';
import Locations from './views/Locations';
import LocationInfo from './views/LocationInfo';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLocations } from './redux/actions/locations';

const App: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocations());
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/locations/:id">
                        <LocationInfo />
                    </Route>
                    <Route path="/locations">
                        <Locations />
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
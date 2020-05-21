import './App.css';
import React from "react";
import Header from './components/Header';
import Home from './views/Home';
import Locations from './views/Locations';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
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
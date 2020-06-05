import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Home from './views/Home';
import Locations from './views/Locations';
import ExerciseInfo from './views/ExerciseInfo';
import LocationInfo from './views/LocationInfo';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLocations } from './redux/actions/locations';
import Backdrop from './components/Backdrop/Backdrop';
import { setMachines } from './redux/actions/machines';

const App: React.FC = () => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLocations());
        dispatch(setMachines());
    }, [dispatch]);

    // TODO: seperate navbar functionality and components into its own component
    const drawerHandler = (): void => {
        setSideDrawerOpen(prevState => !prevState);
    };

    const backdropHandler = (): void => {
        setSideDrawerOpen(false);
    };
    return (
        <Router>
            <div className="App">
                <Navbar drawerHandler={drawerHandler} />
                <SideDrawer show={sideDrawerOpen} click={drawerHandler} />
                {sideDrawerOpen &&
                    <Backdrop click={backdropHandler} />
                }
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
import './App.css';
import React from "react";
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import { Button } from 'antd';

const Home: React.FC = () => {
    return (
        <div className="content">
            <Hero />
            <div className="card">
                <h1 style={{ color: "white" }}>Tervetuloa!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button ghost className="button">Siirry johonkin</Button>
            </div>
        </div>
    );
};

export default Home;

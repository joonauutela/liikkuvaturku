import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <nav className="navbar_navigation">
                <div></div>
                <div className="navbar_logo"><Link to={"/"}></Link>LIIKKUVATURKU</div>
                <div className="spacer" />
                <div className="navbar_navigation-items">
                    <ul>
                        <Link to="/"><li>Aloitus</li></Link>
                        <Link to="/locations"><li>Sijainnit</li></Link>
                        <Link to="/"><li>Laiteohjeet</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

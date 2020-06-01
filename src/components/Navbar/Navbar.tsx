import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggle from '../SideDrawer/DrawerToggle';

import './Navbar.css';

const Navbar: React.FC<{ drawerHandler: () => void }> = ({ drawerHandler }) => {
    return (
        <header className="navbar">
            <nav className="navbar_navigation">
                <div className="navbar_toggle-button">
                    <DrawerToggle click={drawerHandler} />
                </div>
                <div className="navbar_logo"><Link to={"/"}></Link>LIIKKUVATURKU</div>
                <div className="spacer" />
                <div className="navbar_navigation-items">
                    <ul>
                        <Link to="/"><li>Aloitus</li></Link>
                        <Link to="/locations"><li>Sijainnit</li></Link>
                        <Link to="/exerciseinfo"><li>Liikeohjeet</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

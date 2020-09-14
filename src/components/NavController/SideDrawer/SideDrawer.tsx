import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer: React.FC<{ show: boolean; click: () => void }> = ({ show, click }) => {

    let drawerClasses = 'side-drawer';
    if (show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <ul className={drawerClasses}>
            <Link to={"/"} onClick={() => click()}><li>Aloitus</li></Link>
            <Link to={"/locations"} onClick={() => click()}><li>Sijainnit</li></Link>
            <Link to={"/exerciseinfo"} onClick={() => click()}><li>Liikeohjeet</li></Link>
        </ul>
    );
};

export default SideDrawer;

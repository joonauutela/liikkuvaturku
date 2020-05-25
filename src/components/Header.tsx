import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

import '../styles/header.css';

const Header: React.FC = () => {
    return (
        <Menu mode="horizontal" className="nav-container">
            <Menu.Item>
                <Link to="/" className="link">
                    Aloitus
                    </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/locations" className="link">
                    Sijainnit
                    </Link>
            </Menu.Item>

            <Menu.Item>
                <Link to="/" className="link">
                    Liikuntaohjelmat
                    </Link>
            </Menu.Item>
        </Menu>

    );
};

export default Header;

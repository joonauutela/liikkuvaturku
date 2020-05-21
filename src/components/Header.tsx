import React from 'react';
import { Menu } from 'antd';
import '../styles/header.css';

const Header: React.FC = () => {
    return (
        <Menu mode="horizontal" className="nav-container">
            <Menu.Item className="link">
                Aloitus
        </Menu.Item>
            <Menu.Item className="link">
                Sijainnit
        </Menu.Item>
            <Menu.Item className="link">
                Liikuntaohjelmat
        </Menu.Item>
        </Menu>

    );
};

export default Header;

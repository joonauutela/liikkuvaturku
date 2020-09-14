import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './SideDrawer/Backdrop';

const NavController: React.FC = () => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerHandler = (): void => {
        setSideDrawerOpen(prevState => !prevState);
    };

    const backdropHandler = (): void => {
        setSideDrawerOpen(false);
    };
    return (
        <>
            <Navbar drawerHandler={drawerHandler} />
            <SideDrawer show={sideDrawerOpen} click={drawerHandler} />
            {sideDrawerOpen &&
                <Backdrop click={backdropHandler} />
            }
        </>
    );
};

export default NavController;
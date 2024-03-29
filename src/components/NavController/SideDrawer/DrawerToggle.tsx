import React from 'react';

import './DrawerToggle.css';

const DrawerToggle: React.FC<{ click: () => void }> = ({ click }) => {
    // Visual button component for "Side drawer"

    return (
        <button className="toggle-button" onClick={() => click()}>
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
        </button>
    );
};

export default DrawerToggle;

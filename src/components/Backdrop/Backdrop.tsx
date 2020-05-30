import React from 'react';

import './Backdrop.css';

const Backdrop: React.FC<{ click: () => void }> = ({ click }) => {
    return (
        <div className="backdrop" onClick={() => click()} />
    );
};

export default Backdrop;

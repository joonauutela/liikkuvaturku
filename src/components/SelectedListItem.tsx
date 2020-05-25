import React from 'react';
//import { Location } from '../types';
import '../styles/locations-view.css';

const SelectedListItem: React.FC = () => {

    return (
        <div className="selected-item-container">
            <h1>Valittu sijainti</h1>
            <div className="info-box">
                <p className="info-item"><b>Osoite:</b> iopkop</p>
                <p className="info-item"><b>Laitteet: </b>Ylätalja, punnerruslaite, dippitanko</p>
                <p className="info-item">Katso kuvat täältä</p>
            </div>
        </div>
    );
};

export default SelectedListItem;
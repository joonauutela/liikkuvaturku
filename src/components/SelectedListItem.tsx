import React from 'react';
import { Location } from '../types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/locations-view.css';

const SelectedListItem: React.FC = () => {
    interface RootState {
        selectedLocation: Location;
    }

    const selectLocations = (state: RootState) => state.selectedLocation;
    const selectedLocation = useSelector(selectLocations);

    if (selectedLocation === null) return null;
    return (
        <div className="selected-item-container">
            <h1>Valittu sijainti</h1>
            <div className="info-box">
                <p className="info-item"><b>Osoite:</b> {selectedLocation.address}</p>
                <p className="info-item"><b>Laitteet: </b>Ylätalja, punnerruslaite, dippitanko</p>
                <Link to={`/locations/${selectedLocation.id}`}>
                    <p className="info-item">Katso kuvat täältä</p>
                </Link>
            </div>
        </div>
    );
};

export default SelectedListItem;
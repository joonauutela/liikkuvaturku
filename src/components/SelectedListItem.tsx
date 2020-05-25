import React from 'react';
import { Location } from '../types';
import { useSelector } from 'react-redux';
import '../styles/locations-view.css';

const SelectedListItem: React.FC = () => {
    interface RootState {
        selectedLocation: Location;
    }

    const selectLocations = (state: RootState) => state.selectedLocation;
    const selectedLocation = useSelector(selectLocations);
    console.log(selectedLocation);
    if (selectedLocation === null) return null;
    return (
        <div className="selected-item-container">
            <h1>Valittu sijainti</h1>
            <div className="info-box">
                <p className="info-item"><b>Osoite:</b> {selectedLocation.address}</p>
                <p className="info-item"><b>Laitteet: </b>Ylätalja, punnerruslaite, dippitanko</p>
                <p className="info-item">Katso kuvat täältä</p>
            </div>
        </div>
    );
};

export default SelectedListItem;
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/locationInfo-view.css';

const LocationInfoBox: React.FC<{ id: string }> = ({ id }) => {

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);

    const selectedLocation = locations.filter(location => location.id === id)[0];

    if (selectedLocation === null || !selectedLocation) return null;
    return (
        <div>
            <h1>{selectedLocation.name}</h1>
            <p className="info-text">Osoite: {selectedLocation.address}</p>
            <Link to={`/locations`}><Button ghost className="button">Takaisin</Button></Link>
        </div>
    );
};

export default LocationInfoBox;
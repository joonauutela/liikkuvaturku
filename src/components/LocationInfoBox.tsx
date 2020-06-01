import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../redux/actions/selectedLocation';
import { RootState } from '../types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/locationInfo-view.css';

const LocationInfoBox: React.FC<{ id: string }> = ({ id }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocation(id));
    }, [dispatch]);

    const selectLocations = (state: RootState) => state.selectedLocation;
    const selectedLocation = useSelector(selectLocations);

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
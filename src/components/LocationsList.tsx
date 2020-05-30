import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../redux/actions/selectedLocation';
import { setMapParams } from '../redux/actions/map';
import { RootState } from '../types';

import '../styles/locations-view.css';

const LocationsList: React.FC = () => {

    const dispatch = useDispatch();

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);


    const handleClick = (id: string, latitude: number, longitude: number) => {
        dispatch(setLocation(id));
        dispatch(setMapParams(latitude, longitude, 14));
    };

    if (!locations) return null;

    return (
        <div className="list-container">
            <h1>Ulkoliikuntalaitteet</h1>
            <ul className="list">
                {locations.map(location => <li onClick={() => handleClick(location.id, location.latitude, location.longitude)} key={location.id} className="list-item">{location.name}</li>)}
            </ul>
        </div>
    );
};

export default LocationsList;
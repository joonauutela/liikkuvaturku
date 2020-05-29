import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../redux/actions/selectedLocation';
import { RootState } from '../types';

import '../styles/locations-view.css';

const LocationsList: React.FC = () => {

    const dispatch = useDispatch();

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);

    const handleClick = (id: string) => {
        dispatch(setLocation(id));
    };

    if (!locations) return null;

    return (
        <div className="list-container">
            <h1>Ulkoliikuntalaitteet</h1>
            <ul className="list">
                {locations.map(location => <li onClick={() => handleClick(location.id)} key={location.id} className="list-item">{location.address}</li>)}
            </ul>
        </div>
    );
};

export default LocationsList;
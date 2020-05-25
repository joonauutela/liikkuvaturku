import React from 'react';
import '../styles/locations-view.css';
import { Location } from '../types';
import { useSelector } from 'react-redux';

const LocationsList: React.FC = () => {
    interface RootState {
        locations: Location[];
    }
    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);

    if (!locations) return null;

    return (
        <div className="list-container">
            <h1>Ulkoliikuntalaitteet</h1>
            <ul className="list">
                {locations.map(location => <li key={location.id} className="list-item">{location.address}</li>)}
            </ul>
        </div>
    );
};

export default LocationsList;
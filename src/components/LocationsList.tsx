import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, Location } from '../types';
import { Link } from 'react-router-dom';

import '../styles/locations-view.css';

const LocationsList: React.FC<{ handleClick: (location: Location, latitude: number, longitude: number) => void }> = ({ handleClick }) => {

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);

    if (!locations) {
        return null;
    }
    // Mobile
    else if (window.innerWidth < 700) {
        return (
            <div className="list-container-mobile">
                <h1>Ulkoliikuntalaitteet</h1>
                <ul className="list">
                    {locations.map(location =>
                        <Link to={`/locations/${location.id}`} key={location.id}>
                            <li className="list-item">{location.name}
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        );
    }
    // Desktop
    return (
        <div className="list-container">
            <h1>Ulkoliikuntalaitteet</h1>
            <ul className="list">
                {locations.map(location =>
                    <li
                        onClick={() => handleClick(location, location.latitude, location.longitude)}
                        key={location.id}
                        className="list-item">
                        {location.name}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default LocationsList;
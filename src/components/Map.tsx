import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../types';
import { setLocation } from '../redux/actions/selectedLocation';

import '../styles/locations-view.css';

const LocationMap: React.FC = () => {

    const [lat, setLat] = useState(60.454510);
    const [long, setLong] = useState(22.264824);
    const [zoom, setZoom] = useState(12);

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);
    const dispatch = useDispatch();

    const handleClick = (id: string, lat: number, long: number) => {
        dispatch(setLocation(id));
        setZoom(13);
        setLat(lat);
        setLong(long);
    };

    return (
        <div className="map-container">
            <Map center={[lat, long]} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {locations.map(location =>
                    <Marker
                        key={location.id}
                        position={[location.latitude, location.longitude]}
                        onClick={() => handleClick(location.id, location.latitude, location.longitude)}
                    >
                        <Popup><b>Osoite:</b> {location.address}</Popup>
                    </Marker>
                )}
            </Map>
        </div>
    );
};

export default LocationMap;
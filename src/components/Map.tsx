import React from 'react';
import '../styles/locations-view.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Location } from '../types';
import { useSelector } from 'react-redux';

const LocationMap: React.FC = () => {

    interface RootState {
        locations: Location[];
    }
    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);
    return (
        <div className="map-container">
            <Map center={[60.454510, 22.264824]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {locations.map(location =>
                    <Marker key={location.id} position={[location.latitude, location.longitude]}>
                        <Popup><b>Osoite:</b> {location.address}</Popup>
                    </Marker>
                )}
            </Map>
        </div>
    );
};

export default LocationMap;
import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer, Viewport } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Location } from '../../types';
import { Link } from 'react-router-dom';
import { setMapParams } from '../../redux/actions/map';

import './Map.css';

const LocationMap: React.FC<{ setSelectedLocation: React.Dispatch<React.SetStateAction<Location | null>> }> = ({ setSelectedLocation }) => {

    const [lat, setLat] = useState(60.454510);
    const [long, setLong] = useState(22.264824);

    let zoom = 13;
    const dispatch = useDispatch();
    const selectLocations = (state: RootState) => state.locations;
    const selectMapParams = (state: RootState) => state.map;

    const locations = useSelector(selectLocations);
    const mapParams = useSelector(selectMapParams);

    const handleClickMap = (location: Location, latitude: number, longitude: number, zoom: number) => {
        dispatch(setMapParams(latitude, longitude, zoom));
        setSelectedLocation(location);
    };

    useEffect(() => {
        setLat(mapParams.latitude);
        setLong(mapParams.longitude);
    }, [mapParams]);

    const viewport: Viewport = {
        center: [lat, long],
        zoom: mapParams.zoom,
    };

    const getZoom = (viewport: Viewport) => {
        if (viewport.zoom && viewport.zoom !== null)
            zoom = viewport.zoom;
    };
    return (
        <Map viewport={viewport} onViewportChange={getZoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {locations.map(location =>
                <Marker
                    key={location.id}
                    position={[location.latitude, location.longitude]}
                    onClick={() => handleClickMap(location, location.latitude, location.longitude, zoom)}
                >
                    <Popup>
                        <p><b>Nimi:</b> {location.name}</p>
                        <p><b>Osoite:</b> {location.address}</p>
                        <Link to={`/locations/${location.id}`}>
                            <p className="info-item">Katso kuvat täältä</p>
                        </Link>
                    </Popup>
                </Marker>
            )}
        </Map>
    );
};

export default LocationMap;
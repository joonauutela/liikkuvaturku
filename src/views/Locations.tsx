import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import LocationMap from '../components/Map/Map';
import LocationsList from '../components/LocationsList/LocationsList';
import SelectedListItem from '../components/SelectedListItem/SelectedListItem';

import { useDispatch } from 'react-redux';
import { setMapParams } from '../redux/actions/map';
import { setLocations } from '../redux/actions/locations';
import { Location } from '../types';

const Locations: React.FC = () => {

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLocations());
    }, [dispatch]);

    const handleClick = (location: Location, latitude: number, longitude: number) => {
        setSelectedLocation(location);
        dispatch(setMapParams(latitude, longitude, 14));
    };

    if (window.innerWidth < 900) {
        return (
            <div className="content">
                <LocationMap setSelectedLocation={setSelectedLocation} />
                <LocationsList handleClick={handleClick} />
            </div>
        );
    }
    return (
        <div className="content">
            <LocationMap setSelectedLocation={setSelectedLocation} />
            <Row>
                <Col span={12}>
                    <LocationsList handleClick={handleClick} />
                </Col>
                <Col span={12}>
                    <SelectedListItem selectedLocation={selectedLocation} />
                </Col>
            </Row>
        </div>
    );
};

export default Locations;
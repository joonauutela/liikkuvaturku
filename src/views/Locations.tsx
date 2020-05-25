import React from 'react';
import '../App.css';
import { Row, Col } from 'antd';
import LocationMap from '../components/Map';
import LocationsList from '../components/LocationsList';
import SelectedListItem from '../components/SelectedListItem';

const Locations: React.FC = () => {
    return (
        <div className="content">
            <LocationMap />
            <Row>
                <Col span={12}>
                    <LocationsList />
                </Col>
                <Col span={12}>
                    <SelectedListItem />
                </Col>
            </Row>
        </div>
    );
};

export default Locations;
import React from 'react';
import { useParams } from 'react-router-dom';
import { ParamTypes } from '../types';

import ImageCarousel from '../components/ImageCarousel';
import LocationInfoBox from '../components/LocationInfoBox';

import '../styles/locationInfo-view.css';

const LocationInfo: React.FC = () => {

    const { id } = useParams<ParamTypes>();

    return (
        <div className="content">
            <div className="container">
                <ImageCarousel id={id} />
                <LocationInfoBox id={id} />
            </div>
        </div>
    );
};

export default LocationInfo;
import React from 'react';
import { useParams } from 'react-router-dom';
import { ParamTypes } from '../types';

import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import LocationInfoBox from '../components/LocationInfoBox/LocationInfoBox';

const LocationInfo: React.FC = () => {

    const { id } = useParams<ParamTypes>();

    return (
        <>
            <ImageCarousel id={id} />
            <LocationInfoBox id={id} />
        </>
    );
};

export default LocationInfo;
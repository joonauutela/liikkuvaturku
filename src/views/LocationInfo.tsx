import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { ParamTypes } from '../types';
import { setLocations } from '../redux/actions/locations';

import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import LocationInfoBox from '../components/LocationInfoBox/LocationInfoBox';

const LocationInfo: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLocations());
    }, [dispatch]);

    const { id } = useParams<ParamTypes>();

    return (
        <>
            <ImageCarousel id={id} />
            <LocationInfoBox id={id} />
        </>
    );
};

export default LocationInfo;
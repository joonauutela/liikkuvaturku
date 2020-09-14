/* eslint-disable no-undef */
import React from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { Spin } from 'antd';

import '../styles/locationInfo-view.css';

const ImageCarousel: React.FC<{ id: string }> = ({ id }) => {

    const selectLocations = (state: RootState) => state.locations;
    const locations = useSelector(selectLocations);

    const selectedLocation = locations.filter(location => location.id === id)[0];

    if (selectedLocation === null || !selectedLocation) return (
        <div className="spinner">
            <Spin size="large" style={{ color: "white" }} />
            <h1>Loading...</h1>
        </div>
    );

    else if (!selectedLocation.images[0]) return (
        <div className="spinner">
            <Spin size="large" style={{ color: "white" }} />
            <h1>Loading...</h1>
        </div>
    );
    return (
        <Carousel draggable={true}>
            {selectedLocation.images.map(image => {
                return (
                    <div className="img-container" key={image}>
                        <img src={require(`.././media/locations/${image}`)} />
                    </div>
                );
            })}
        </Carousel>

    );
};

export default ImageCarousel;
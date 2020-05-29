import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setImagesById } from '../redux/actions/images';
import { RootState } from '../types';

import '../styles/locationInfo-view.css';

const ImageCarousel: React.FC<{ id: string }> = ({ id }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setImagesById(id));
    }, [dispatch, id]);

    const selectImages = (state: RootState) => state.images;
    const selectedImages = useSelector(selectImages);

    if (selectedImages.length === 0 || !selectedImages) return null;
    return (
        <Carousel draggable={true}>
            <div className="img-container">
                <img src={selectedImages[0].image_url} />
            </div>
            <div className="img-container">
                <img src={selectedImages[1].image_url} />
            </div>
        </Carousel>
    );
};

export default ImageCarousel;
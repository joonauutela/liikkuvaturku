import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMachineImages } from '../../redux/actions/images';
import { RootState, Image } from '../../types';

import './Accordion.css';

const Accordion: React.FC<{ id: string; name: string; content: string; reps: string; sets: string }> = ({ id, name, content, reps, sets }) => {
    const [active, setActive] = useState(false);
    const [image, setImage] = useState<Image | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    // Set all images of excercise machines to redux
    useEffect(() => {
        dispatch(setMachineImages());
    }, [dispatch]);

    // Get the images from redux
    const selectImages = (state: RootState) => state.images;
    const selectedImages = useSelector(selectImages);

    useEffect(() => {
        selectedImages.map(image => console.log(image.destination_id));
        setImage(selectedImages.filter(image => image.destination_id === id)[0]);
    });

    useEffect(() => {
        if (selectedImages.length !== 0) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            contentRef.current!.style.maxHeight = active ? `${contentRef.current!.scrollHeight}px` : '0px';
        }
    }, [contentRef, active, selectedImages]);

    const toggleActive = () => {
        setActive(!active);
    };

    if (selectedImages.length === 0 && image === null && !image) return null;
    return (
        <div className="menu-container">
            <button
                onClick={toggleActive}
                className="menu_item-button"><img className="accordion_item-image" src={image?.image_url} />{name}</button>
            <div className="menu_item-content" ref={contentRef}>
                <h4 style={{ color: "white" }}>Liikeohjeet:</h4>
                <p>
                    {content}
                </p>
                <h4 style={{ color: "white" }}>Liikemäärä:</h4>
                <p>Tee {reps} toistoa ja {sets} settiä. Pidä settien välissä 30-60 sekunnin lepotauko.</p>
            </div>
        </div>
    );
};

export default Accordion;

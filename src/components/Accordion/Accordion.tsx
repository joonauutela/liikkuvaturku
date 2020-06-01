/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-undef */
import React, { useState, useLayoutEffect, useRef } from 'react';
import './Accordion.css';

const Accordion: React.FC = () => {
    const [active, setActive] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        contentRef.current!.style.maxHeight = active ? `${contentRef.current!.scrollHeight}px` : '0px';
    }, [contentRef, active]);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div className="menu-container">
            <button
                onClick={toggleActive}
                className="menu_item-button"><img className="accordion_item-image" src={require("../../media/ylatalja.JPG")} />Ylätalja</button>
            <div className="menu_item-content" ref={contentRef}>
                <h4 style={{ color: "white" }}>Miten käytetään:</h4>
                <p>
                    lorem ipsum lololollorem ipsum lololollorem ipsum lololollorem
                    ipsum lololollorem ipsum lololollorem ipsum lololollorem ipsum lololollorem ipsum lololol
                </p>
                <h4 style={{ color: "white" }}>Miten käytetään:</h4>
                <p>
                    lorem ipsum lololollorem ipsum lololollorem ipsum lololollorem
                    ipsum lololollorem ipsum lololollorem ipsum lololollorem ipsum lololollorem ipsum lololol
                </p>
            </div>
        </div>
    );
};

export default Accordion;

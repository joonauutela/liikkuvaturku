/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { Spin } from 'antd';
import './Accordion.css';

const Accordion: React.FC<{ name: string; content: string; reps: string; sets: string; image: string }> = ({ name, content, reps, sets, image }) => {
    const [active, setActive] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        contentRef.current!.style.maxHeight = active ? `${contentRef.current!.scrollHeight}px` : '0px';
    }, [contentRef, active]);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div className="menu-container">
            <button
                onClick={toggleActive}
                className="menu_item-button"
            >
                {!image && image === null
                    ?
                    <Spin size="large" />
                    :
                    <img className="accordion_item-image" src={require(`../../media/machines/${image}`)} />
                }
                <div className="accordion-title-content">
                    <p>{name}<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>></span></p>
                </div>
            </button>
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

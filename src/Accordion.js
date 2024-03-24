import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className='accordion-title-words'>{title}</div>
                <div className='accordion-icon'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">{content}<br></br></div>}
        </div>
    );
};

export default Accordion;
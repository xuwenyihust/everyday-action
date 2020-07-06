import React from 'react';
import './Modal.css';

const modal = (props) => (
    <div
        className='Modal'
            style={{
                opacity: props.show ? '1' : '0'
            }}>
        {props.children}
    </div>
);

export default modal;
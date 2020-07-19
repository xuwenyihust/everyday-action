import React from 'react';
import './SubTask.css';

const subTask = (props) => {
    return (
        <div className='SubTask'>
            <li><input type="checkbox" />{props.content}</li>
        </div>
    );
}

export default subTask;


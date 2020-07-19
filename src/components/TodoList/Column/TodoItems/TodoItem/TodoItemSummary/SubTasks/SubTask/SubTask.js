import React from 'react';
import './SubTask.css';

const subTask = (props) => {
    return (
        <div className='SubTask'>
            <li><input 
                    type="checkbox" 
                    checked={props.checked}
                    onChange={() => props.subTaskClicked(props.subTaskKey)}/>{props.content}</li>
        </div>
    );
}

export default subTask;


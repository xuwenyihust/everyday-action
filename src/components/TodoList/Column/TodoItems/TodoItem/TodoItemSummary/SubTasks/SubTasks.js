import React from 'react';
import './SubTasks.css';

const subTasks = (props) => {
    
    return (
        <div className='SubTasks'>
            <p>子任务:</p> 
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default subTasks;
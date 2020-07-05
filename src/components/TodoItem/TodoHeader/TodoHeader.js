import React from 'react';
import './TodoHeader.css';

const todoHeader = (props) => (
    <div>
        <input ref="itemName" placeholder="新任务"></input>
    </div>
);

export default todoHeader;
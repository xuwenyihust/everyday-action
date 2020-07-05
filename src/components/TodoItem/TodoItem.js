import React from 'react';
import './TodoItem.css';

const todoItem = (props) => (
    <div>
        <p>{props.content}</p>
    </div>
);

export default todoItem;
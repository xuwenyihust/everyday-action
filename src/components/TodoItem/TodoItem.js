import React from 'react';
import './TodoItem.css';

const todoItem = (props) => (
    <div>
        <p>{props.type}: <strong>{props.content}</strong></p>
    </div>
);

export default todoItem;
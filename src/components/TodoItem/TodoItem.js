import React from 'react';
import './TodoItem.css';

const todoItem = (props) => (
    <div className="TodoItem">
        <p 
            className={props.item.done ? 'done' : 'undone'}
            onClick={() => props.clicked(props.item.id)}>{props.item.content}</p>
        <button type="button" className="closeButton">&times;</button>
    </div>
);

export default todoItem;
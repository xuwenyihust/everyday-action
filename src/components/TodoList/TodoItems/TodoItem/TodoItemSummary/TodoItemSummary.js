import React from 'react';
import './TodoItemSummary.css';

const todoItemSummary = (props) => (
    <div>
        <p>{props.item.content}</p>
        <button
            type="button" 
            className="saveButton"
            onClick={() => props.saveClicked()}>确定</button>
        <button
            type="button" 
            className="cancelButton"
            onClick={() => props.cancelClicked()}>取消</button>
    </div>
);

export default todoItemSummary;
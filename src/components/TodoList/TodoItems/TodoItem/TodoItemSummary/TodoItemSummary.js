import React from 'react';
import './TodoItemSummary.css';

const todoItemSummary = (props) => (
    <div>
        <h3>{props.item.content}</h3>
        <p>类别： <strong>{props.item.type}</strong></p>
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
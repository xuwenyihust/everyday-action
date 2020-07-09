import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {

    const itemObjects = props.items;
    const items = Object.keys(itemObjects).map(itemKey => {
        return <TodoItem 
                    columnId={props.columnId}
                    key={itemObjects[itemKey].id} 
                    item={itemObjects[itemKey]} 
                    contentClicked={props.contentClicked} 
                    editClicked={props.editClicked} 
                    closeClicked={props.closeClicked}/>
    })

    return (
        <div className="TodoItems">
            <h4>{props.key}</h4>
            <ul>
                {items}
            </ul>
        </div>
    );
};

export default todoItems;
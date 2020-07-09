import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {

    const itemObjects = props.items;
    const items = Object.keys(itemObjects).map(itemKey => {
        return <TodoItem 
                    key={itemObjects[itemKey].id} 
                    item={itemObjects[itemKey]} 
                    contentClicked={props.contentClicked} 
                    editClicked={props.editClicked} 
                    closeClicked={props.closeClicked}/>
    })

    return (
        <div className="TodoItems">
            <ul>
                {items}
            </ul>
        </div>
    );
};

export default todoItems;
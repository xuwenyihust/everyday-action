import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {

    const items = props.items.map(item =>{
        return <TodoItem 
                    key={item.id} 
                    item={item} 
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
import React from 'react';
import './Column.css';
import TodoItems from './TodoItems/TodoItems';
import TodoForm from './TodoForm/TodoForm';

const column = (props) => {

    return (
        <div className='Column'>
            <h4>{props.column.title}</h4>
            <TodoForm 
                value={props.column.itemToSubmit.content} 
                inputChanged={(e) => props.formInputChanged(e, props.column.id)} 
                submitted={(e) => props.submitted(e, props.column.id)}/>
            <TodoItems 
                columnId={props.column.id}
                items={props.items} 
                contentClicked={props.contentClicked} 
                editClicked={props.editClicked}
                closeClicked={props.closeClicked}/>
        </div>
    );
}

export default column;
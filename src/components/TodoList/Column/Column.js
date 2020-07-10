import React, {Component} from 'react';
import './Column.css';
import { Droppable } from 'react-beautiful-dnd';
import TodoForm from './TodoForm/TodoForm';
import TodoItems from './TodoItems/TodoItems';
import TodoItem from './TodoItems/TodoItem/TodoItem';

class column extends Component {

    render () {

        const itemObjects = this.props.items;
        const items = Object.keys(itemObjects).map((itemKey, index) => {
            return <TodoItem 
                        columnId={this.props.column.id}
                        key={itemObjects[itemKey].id} 
                        item={itemObjects[itemKey]} 
                        contentClicked={this.props.contentClicked} 
                        editClicked={this.props.editClicked} 
                        closeClicked={this.props.closeClicked}
                        index={index}/>
        })

        return (
            <div className='Column'>
                <h3>{this.props.column.title}</h3>
                <TodoForm 
                    value={this.props.column.itemToSubmit.content} 
                    inputChanged={(e) => this.props.formInputChanged(e,this. props.column.id)} 
                    submitted={(e) => this.props.submitted(e, this.props.column.id)}/>
                <Droppable 
                    droppableId={this.props.column.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <TodoItems>
                                {items}
                            </TodoItems>
                            {provided.placeholder}
                        </div>
                        
                    )}
                </Droppable>
            </div>
        );
    }
}

export default column;
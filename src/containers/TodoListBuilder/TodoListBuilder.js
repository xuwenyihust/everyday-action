import React, {Component} from 'react';
import './TodoListBuilder.css';
import initialData from '../../initialData';
import Column from '../../components/TodoList/Column/Column';
import TodoItemSummary from '../../components/TodoList/Column/TodoItems/TodoItem/TodoItemSummary/TodoItemSummary';
import Modal from '../../components/UI/Modal/Modal';

class TodoList extends Component {

    state = initialData;

    formInputChangeHandler = (event, columnId) => {
        let columns = this.state.columns;
        let column = {... columns[columnId]};
        const newItemToSubmit = {
            id: null,
            created_timestamp: null,
            content: event.target.value,
            done: false
        }
        column.itemToSubmit = newItemToSubmit;
        columns[columnId] = column;

        this.setState({columns: columns})
    }

    addItemHandler = (event, columnId) => {
        event.preventDefault();

        let columns = this.state.columns;
        let column = {... columns[columnId]};
        const itemToSubmit = column.itemToSubmit;

        if(itemToSubmit.content) {
            let newItems = {... this.state.items};
            const newId = Date.now()
            const newItem = {
                id: newId,
                created_timestamp: newId,
                content: itemToSubmit.content,
                done: false
            }

            column.taskIds.push(newItem.id);
            columns[columnId] = column;

            newItems[newId] = newItem;
            this.setState({
                items: newItems,
                columns: columns});
        }
    }

    removeItemHandler = (itemId, columnId) => {
        // Need to remove from both  items & columns.taskIds
        let updatedItems = {... this.state.items};
        delete updatedItems[itemId];

        let columns = this.state.columns;
        let updatedColumn = {... columns[columnId]};
        const updatedTaskIds = updatedColumn.taskIds.filter(id =>
            id !== itemId 
        );
        updatedColumn.taskIds = updatedTaskIds;
        columns[columnId] = updatedColumn;

        this.setState({
            items: updatedItems,
            columns: columns
        });
    }

    editItemHandler = (itemId) => {
        const items = {... this.state.items}
        const itemUnderEditing = items[itemId];

        this.setState({
            editingItem: true,
            itemUnderEditing: {... itemUnderEditing}
        })
    }

    revertItemDoneHandler = (itemId) => {
        let updatedItems = {... this.state.items};
        let updatedItem = updatedItems[itemId];
        updatedItem.done = !updatedItem.done;

        this.setState({items: updatedItems});
    }

    itemSummaryContentChangeHandler = (event) => {
        let itemUnderEditing = this.state.itemUnderEditing;
        itemUnderEditing.content = event.target.value;

        this.setState({itemUnderEditing: itemUnderEditing})
    }

    itemSummaryTypeChangeHandler = (event) => {
        let itemUnderEditing = this.state.itemUnderEditing;
        itemUnderEditing.type = event.target.value;

        this.setState({itemUnderEditing: itemUnderEditing})
    }

    editItemSaveHandler = (item) => {
        let items = {... this.state.items};
        items[item.id] = item;
        
        this.setState({
            items: items,
            editingItem: false,
            itemUnderEditing: {}
        })
    }

    editItemCancelHandler = () => {

        this.setState({
            editingItem: false,
            itemUnderEditing: {}
        })
    }

    render () {
        const columns = this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const items = column.taskIds.map(taskId => this.state.items[taskId]);

            return <Column 
                        column={column}
                        formInputChanged={this.formInputChangeHandler} 
                        submitted={this.addItemHandler}
                        items={items} 
                        contentClicked={this.revertItemDoneHandler} 
                        editClicked={this.editItemHandler}
                        closeClicked={this.removeItemHandler}/>
        })

        return (
            <div className='TodoListBuilder'>
                <Modal show={this.state.editingItem}>
                    <TodoItemSummary 
                        itemTypes={this.state.itemTypes}
                        item={this.state.itemUnderEditing}
                        itemSummaryContentChanged={this.itemSummaryContentChangeHandler}
                        itemSummaryTypeChanged={this.itemSummaryTypeChangeHandler}
                        saveClicked={this.editItemSaveHandler}
                        cancelClicked={this.editItemCancelHandler}/>
                </Modal>

                {columns}
                
            </div>
        )
    }

}

export default TodoList;
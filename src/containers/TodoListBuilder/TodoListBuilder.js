import React, {Component} from 'react';
import './TodoListBuilder.css';
import initialData from '../../initialData';
import 'react-dates/lib/css/_datepicker.css';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../../components/TodoList/Column/Column';
import TodoItemSummary from '../../components/TodoList/Column/TodoItems/TodoItem/TodoItemSummary/TodoItemSummary';
import Modal from '../../components/UI/Modal/Modal';

class TodoList extends Component {

    state = initialData;

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        if (destination.droppableId === source.droppableId) {

            const column = this.state.columns[source.droppableId];
            const newTaskIds = Array.from(column.taskIds);
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ... column,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };
            this.setState(newState);
        } else {
            const sourceColumn = this.state.columns[source.droppableId];
            const destinationColumn = this.state.columns[destination.droppableId];
            const newSourceTaskIds = Array.from(sourceColumn.taskIds);
            const newDestinationTaskIds = Array.from(destinationColumn.taskIds);

            const newItems = {... this.state.items}
            let newItem = newItems[draggableId];
            // Auto be done if moved to DONE
            if (destinationColumn.title === '完成') {
                newItem.done = true;
            } else if (sourceColumn.title === '完成' && newItem.done === true) {
                newItem.done = false;
            }

            newSourceTaskIds.splice(source.index, 1)
            newDestinationTaskIds.splice(destination.index, 0, draggableId)

            const newSourceColumn = {
                ... sourceColumn,
                taskIds: newSourceTaskIds
            };
            const newDestinationColumn = {
                ... destinationColumn,
                taskIds: newDestinationTaskIds
            };

            const newState = {
                ...this.state,
                items: newItems,
                columns: {
                    ...this.state.columns,
                    [newSourceColumn.id]: newSourceColumn,
                    [newDestinationColumn.id]: newDestinationColumn
                }
            };

            this.setState(newState);
        }

    }

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
            const newId = Date.now().toString()
            const newItem = {
                id: newId,
                created_timestamp: newId,
                content: itemToSubmit.content,
                type: null,
                due_date: null,
                sub_tasks: {},
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
        // Need to remove from both items & columns.taskIds
        let updatedItems = {... this.state.items};
        delete updatedItems[itemId];

        let columns = this.state.columns;
        let updatedColumn = {... columns[columnId]};
        const updatedTaskIds = updatedColumn.taskIds.filter(id =>
            id !== itemId 
        );
        updatedColumn.taskIds = updatedTaskIds;
        columns[columnId] = updatedColumn;

        console.log(columns);

        this.setState({
            items: updatedItems,
            columns: columns
        });
    }

    editItemHandler = (itemId) => {
        const items = {
            ... this.state.items
        };
        const itemUnderEditing = {
            ... items[itemId],
            sub_tasks: {... items[itemId].sub_tasks}
        };

        this.setState({
            editingItem: true,
            itemUnderEditing: {... itemUnderEditing}
        })
    }

    revertItemDoneHandler = (itemId, columnId) => {
        let updatedItems = {... this.state.items};
        let updatedItem = updatedItems[itemId];
        if (updatedItem.done === false) {
            updatedItem.done = true;

            const sourceColumn = this.state.columns[columnId];
            const destinationColumn = this.state.columns["完成"];

            const newSourceTaskIds = sourceColumn.taskIds.filter(id => id !== itemId);
            const newDestinationTaskIds = [... destinationColumn.taskIds]
            newDestinationTaskIds.push(itemId)

            console.log(newSourceTaskIds);
            console.log(newDestinationTaskIds);

            const newSourceColumn = {
                ... sourceColumn,
                taskIds: newSourceTaskIds
            };
            const newDestinationColumn = {
                ... destinationColumn,
                taskIds: newDestinationTaskIds
            };

            const newState = {
                ...this.state,
                items: updatedItems,
                columns: {
                    ...this.state.columns,
                    [newSourceColumn.id]: newSourceColumn,
                    [newDestinationColumn.id]: newDestinationColumn
                }
            };
            this.setState(newState);
        }
    }

    // Item Summary Modal
    itemSummaryContentChangeHandler = (event) => {
        let itemUnderEditing = this.state.itemUnderEditing;
        itemUnderEditing.content = event.target.value;

        this.setState({itemUnderEditing: itemUnderEditing})
    }

    itemSummaryTypeChangeHandler = (event) => {
        const itemUnderEditing = this.state.itemUnderEditing;
        const newItemUnderEditing = {
            ... itemUnderEditing,
            type: event.target.value
        }

        this.setState({itemUnderEditing: newItemUnderEditing})
    }

    itemDueDateChangeHandler = (date, itemId)  => {
        const itemUnderEditing = this.state.itemUnderEditing;
        const newItemUnderEditing = {
            ... itemUnderEditing,
            due_date: date
        }

        this.setState({itemUnderEditing: newItemUnderEditing})
    }

    itemDueDateFocusChangeHandler = ({ focused })  => {
        this.setState({ dueDatePickFocused: focused });
    }

    itemDueDateDeleteHandler = () => {
        const itemUnderEditing = this.state.itemUnderEditing;
        const newItemUnderEditing = {
            ... itemUnderEditing,
            due_date: null
        }

        this.setState({itemUnderEditing: newItemUnderEditing})
    }

    itemSubTaskCheckedHandler = (subTaskKey) => {
        const itemUnderEditing = this.state.itemUnderEditing;

        const newSubTask = {
            ... itemUnderEditing.sub_tasks[subTaskKey],
            done: !itemUnderEditing.sub_tasks[subTaskKey].done
        }
        let newSubTasks = itemUnderEditing.sub_tasks;
        newSubTasks[subTaskKey] = newSubTask;

        const newItemUnderEditing = {
            ... itemUnderEditing,
            sub_tasks: newSubTasks
        }
        this.setState({itemUnderEditing: newItemUnderEditing})
    }

    itemSubTaskInputChanged = (event) => {
        const newSubTaskToSubmit = {
            content: event.target.value,
            done: false
        }
        this.setState({subTaskToSubmit: newSubTaskToSubmit});
    }

    itemSubTaskAddHandler = (event) => {
        event.preventDefault();

        const itemUnderEditing = this.state.itemUnderEditing;

        let subTasks = itemUnderEditing.sub_tasks;
        const newSubTaskToSubmitId = Date.now().toString();
        subTasks[newSubTaskToSubmitId] = this.state.subTaskToSubmit
        console.log(subTasks[newSubTaskToSubmitId]);

        if (Object.entries(subTasks[newSubTaskToSubmitId]).length === 0) {
            subTasks[newSubTaskToSubmitId] = {
                content: "新子任务",
                done: false
            };
        }

        const newItemUnderEditing = {
            ... itemUnderEditing,
            sub_tasks: subTasks
        }

        this.setState({itemUnderEditing: newItemUnderEditing});
    }

    itemSubTaskEdited = (event, subTaskKey) => {
        const itemUnderEditing = this.state.itemUnderEditing;

        let subTasks = {... itemUnderEditing.sub_tasks};
        subTasks[subTaskKey] = {
            ... subTasks[subTaskKey],
            content: event.target.value
        };

        const newItemUnderEditing = {
            ... itemUnderEditing,
            sub_tasks: subTasks
        }
        this.setState({itemUnderEditing: newItemUnderEditing});
    }

    itemSubTaskCloseHandler = (subTaskKey) => {
        const itemUnderEditing = this.state.itemUnderEditing;

        let subTasks = itemUnderEditing.sub_tasks;
        delete subTasks[subTaskKey];

        const newItemUnderEditing = {
            ... itemUnderEditing,
            sub_tasks: subTasks
        }

        this.setState({itemUnderEditing: newItemUnderEditing});
    }

    // Save/Cancel Button
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
                        key={column.id}
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
                        dueDatePickDate={this.state.dueDatePickDate}
                        dueDatePickFocused={this.state.dueDatePickFocused}
                        itemSummaryContentChanged={this.itemSummaryContentChangeHandler}
                        itemSummaryTypeChanged={this.itemSummaryTypeChangeHandler}
                        itemDueDateChanged={this.itemDueDateChangeHandler}
                        itemDueDateFocusChanged={this.itemDueDateFocusChangeHandler}
                        itemDueDateDeleted={this.itemDueDateDeleteHandler}
                        subTaskChecked={this.itemSubTaskCheckedHandler}
                        subTaskInputChanged={this.itemSubTaskInputChanged}
                        subTaskAdded={this.itemSubTaskAddHandler}
                        subTaskEdited={this.itemSubTaskEdited}
                        subTaskClosed={this.itemSubTaskCloseHandler}
                        saveClicked={this.editItemSaveHandler}
                        cancelClicked={this.editItemCancelHandler}/>
                </Modal>

                <DragDropContext
                    onDragEnd={this.onDragEnd}>
                    {columns}
                </DragDropContext>
            </div>
        )
    }

}

export default TodoList;
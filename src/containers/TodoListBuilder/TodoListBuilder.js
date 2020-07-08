import React, {Component} from 'react';
import './TodoListBuilder.css';
import TodoItems from '../../components/TodoList/TodoItems/TodoItems';
import TodoForm from '../../components/TodoList/TodoForm/TodoForm';
import TodoItemSummary from '../../components/TodoList/TodoItems/TodoItem/TodoItemSummary/TodoItemSummary';
import Modal from '../../components/UI/Modal/Modal';

class TodoList extends Component {

    state = {
        itemToSubmit: {
            id: null,
            content: "新任务",
            type: null,
            created_timestamp: null,
            done: false
        },

        itemTypes: ["运动", "生活", "学习", "工作", "娱乐"],

        items: [
            {
                id: 1593920420073,
                created_timestamp: 1593920420073,
                content: "跑步",
                type: "运动",
                done: false
            },
            {
                id: 1593920427447,
                created_timestamp: 1593920420073,
                content: "混合有氧",
                type: "运动",
                done: false
            },
            {
                id: 1593920442267,
                created_timestamp: 1593920420073,
                content: "洗牙",
                type: "生活",
                done: false
            },
            {
                id: 1593988570469,
                created_timestamp: 1593988570469,
                content: "看书",
                type: "学习",
                done: false
            }
        ],

        editingItem: false,
        itemUnderEditing: {}
    }

    inputChangeHandler = (event) => {
        const newItemToSubmit = {
            id: null,
            created_timestamp: null,
            content: event.target.value,
            done: false
        }

        this.setState({itemToSubmit: newItemToSubmit})
    }

    addItemHandler = (event) => {
        event.preventDefault();
        const itemToSubmit = this.state.itemToSubmit;

        if(itemToSubmit.content) {
            let newItems = [... this.state.items];
            newItems.push({
                id: Date.now(),
                created_timestamp: Date.now(),
                content: itemToSubmit.content,
                done: false
            });
            this.setState({items: newItems});
        }
    }

    removeItemHandler = (itemId) => {
        const items = [... this.state.items]
        const updatedItems = items.filter(item => 
                                item.id !== itemId);

        this.setState({items: updatedItems});
    }

    editItemHandler = (itemId) => {
        const items = [... this.state.items]
        const itemUnderEditing = items.find(item => item.id === itemId);

        this.setState({
            editingItem: true,
            itemUnderEditing: {... itemUnderEditing}
        })
    }

    revertItemDoneHandler = (itemId) => {
        let updatedItems = [... this.state.items];
        let updatedItem = updatedItems.find(item => item.id === itemId);
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
        let items = [... this.state.items];
        const previousItem = items.find(i =>
            i.id === item.id);
        const previousItemIndex = items.indexOf(previousItem);
        items[previousItemIndex] = item;
        
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

                <h4>任务清单</h4>
                <TodoForm 
                    value={this.state.itemToSubmit.content} 
                    inputChanged={this.inputChangeHandler} 
                    submitted={this.addItemHandler}/>
                <TodoItems 
                    items={this.state.items} 
                    contentClicked={this.revertItemDoneHandler} 
                    editClicked={this.editItemHandler}
                    closeClicked={this.removeItemHandler}/>
            </div>
        )
    }

}

export default TodoList;
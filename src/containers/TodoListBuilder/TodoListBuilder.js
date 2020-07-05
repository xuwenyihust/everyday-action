import React, {Component} from 'react';
import './TodoListBuilder.css';
import TodoItems from '../../components/TodoList/TodoItems/TodoItems';
import TodoForm from '../../components/TodoList/TodoForm/TodoForm';

class TodoList extends Component {

    state = {
        itemToSubmit: {
            id: null,
            content: "新任务",
            type: null,
            created_timestamp: null,
            done: false
        },
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
                content: "理发",
                type: "生活",
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
                content: "读书",
                type: "学习",
                done: false
            }
        ]
    }

    inputChangeHandler = (event) => {
        console.log(event.target.value);
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
        let updatedItems = this.state.items;
        updatedItems = updatedItems.filter(item => 
                        item.id !== itemId);
        console.log(updatedItems);

        this.setState({items: updatedItems});
    }

    revertItemDoneHandler = (itemId) => {
        let updatedItems = this.state.items;
        let updatedItem = updatedItems.find(item => item.id === itemId);
        updatedItem.done = !updatedItem.done;

        this.setState({items: updatedItems});
    }

    render () {
        return (
            <div className='TodoListBuilder'>
                <h4>任务清单</h4>
                <TodoForm value={this.state.itemToSubmit.content} inputChanged={this.inputChangeHandler} submitted={this.addItemHandler}/>
                <TodoItems items={this.state.items} contentClicked={this.revertItemDoneHandler} closeClicked={this.removeItemHandler}/>
                {/* <ul>
                    {items}
                </ul> */}
            </div>
        )
    }

}

export default TodoList;
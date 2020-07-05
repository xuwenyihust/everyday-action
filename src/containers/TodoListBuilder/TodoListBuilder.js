import React, {Component} from 'react';
import './TodoListBuilder.css';
import TodoItem from '../../components/TodoList/TodoItem/TodoItem';
import TodoForm from '../../components/TodoList/TodoForm/TodoForm';

class TodoList extends Component {

    state = {
        itemToSubmit: {
            id: null,
            content: "新任务",
            done: false
        },
        items: [
            {
                id: 1593920420073,
                content: "跑步",
                done: false
            },
            {
                id: 1593920427447,
                content: "理发",
                done: false
            },
            {
                id: 1593920442267,
                content: "洗牙",
                done: false
            }
        ]
    }

    inputChangeHandler = (event) => {
        console.log(event.target.value);
        const newItemToSubmit = {
            id: null,
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
        const items = this.state.items.map(item =>{
            return <TodoItem key={item.id} item={item} contentClicked={this.revertItemDoneHandler} closeClicked={this.removeItemHandler}/>
        })

        return (
            <div>
                <h4>任务清单</h4>
                <TodoForm value={this.state.itemToSubmit.content} inputChanged={this.inputChangeHandler} submitted={this.addItemHandler}/>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

}

export default TodoList;
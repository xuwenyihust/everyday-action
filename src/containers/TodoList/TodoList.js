import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem/TodoItem';

class TodoList extends Component {

    state = {
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

    addItem = (event) => {
        event.preventDefault();
        let newItemValue = this.refs.itemName.value;

        if(newItemValue) {
            let newItems = [... this.state.items];
            newItems.push({
                id: Date.now(),
                content: newItemValue
            });

            this.setState({items: newItems})
        }
    }

    removeItem = () => {

    }

    revertItemDone = (itemId) => {
        let updatedItems = this.state.items
        let updatedItem = updatedItems.find(item => item.id === itemId);
        updatedItem.done = !updatedItem.done;

        this.setState({items: updatedItems})
    }

    render () {
        const items = this.state.items.map(item =>{
            return <TodoItem key={item.id} item={item} clicked={this.revertItemDone}/>
        })

        return (
            <div>
                <h4>任务清单</h4>
                <form onSubmit={this.addItem}>
                    <input ref="itemName" placeholder="新任务"></input>
                    <button type="submit">添加</button>
                </form>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

}

export default TodoList;
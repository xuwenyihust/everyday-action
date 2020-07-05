import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem/TodoItem';

class TodoList extends Component {

    state = {
        items: [
            {
                id: 0,
                content: "跑步",
                type: "运动",
            },
            {
                id: 1,
                content: "理发",
                type: "生活",
            },
            {
                id: 2,
                content: "洗牙",
                type: "生活",
            }
        ]
    }

    render () {
        const items = this.state.items.map(item =>{
            return <TodoItem key={item.id} content={item.content} type={item.type}/>
        })

        return (
            <div>
                <p>任务清单</p>
                <form>
                    <label htmlFor="newItem">新任务:</label>
                    <input type="text" id="newItem" name="newItem"></input>
                    <input type="submit" value="Submit"></input>
                </form>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

}

export default TodoList;
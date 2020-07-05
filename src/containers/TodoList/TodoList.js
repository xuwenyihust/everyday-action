import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem/TodoItem';

class TodoList extends Component {

    state = {
        items: [
            {
                content: "跑步",
                type: "运动",
            },
            {
                content: "理发",
                type: "生活",
            },
            {
                content: "洗牙",
                type: "生活",
            }
        ]
    }

    render () {


        return (
            <div>
                <p>清单</p>
                <ul>
                    <TodoItem content="跑步" type="运动"/>
                    <TodoItem content="理发" type="生活"/>
                    <TodoItem content="洗牙" type="生活"/>
                </ul>
            </div>
        )
    }

}

export default TodoList;
import React, {Component} from 'react';
import './TodoItems.css';

class todoItems extends Component {

    render () {
        return (
            <div className="TodoItems">
                <h4>{this.props.key}</h4>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
};

export default todoItems;
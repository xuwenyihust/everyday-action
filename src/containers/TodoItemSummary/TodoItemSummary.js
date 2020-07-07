import React, {Component} from 'react';
import './TodoItemSummary.css';

class TodoItemSummary extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log(props.item);

    //     this.state = {
    //         item: this.props.item
    //     }
    // }

    state = {
        item: null
    }
    // itemEditHandler = (item) => {
    //     this.setState({
    //         item: item
    //     });
    // }

    render () {
        
        console.log(this.state.item);
        let item = null;

        if (this.state.item === null) {
            item = this.props.item
        } else {
            item = this.state.item
        }

        return (
            <div className='TodoItemSummary'>

                <form>
                    <label>内容：</label>
                    <input 
                        value={item.content}
                        onChange={this.props.itemSummaryContentChanged}></input>
                </form>

                <form>
                    <label>类别：</label>
                    <input 
                        value={item.type}
                        ></input>
                </form>

                <button
                    type="button"
                    className="saveButton"
                    onClick={() => this.props.saveClicked()}>确定</button>
                <button
                    type="button" 
                    className="cancelButton"
                    onClick={() => this.props.cancelClicked()}>取消</button>
            </div>
        )
    }
};

export default TodoItemSummary;
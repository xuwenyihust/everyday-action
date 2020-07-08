import React, {Component} from 'react';
import './TodoItemSummary.css';

class TodoItemSummary extends Component {

    state = {
        item: null
    }

    itemSummaryContentChangeHandler = (event) => {
        let itemUnderChange;
        if (this.state.item === null) {
            itemUnderChange = this.props.item;
        } else {
            itemUnderChange = this.state.item;
        }

        itemUnderChange.content = event.target.value;
        console.log(itemUnderChange);
        this.setState({item: itemUnderChange})
    }

    itemSummaryTypeChangeHandler = (event) => {
        let itemUnderChange;
        if (this.state.item === null) {
            itemUnderChange = this.props.item;
        } else {
            itemUnderChange = this.state.item;
        }

        itemUnderChange.type = event.target.value;
        console.log(itemUnderChange);
        this.setState({item: itemUnderChange})
    }

    render () {
        
        const item = this.props.item;

        const itemTypes = this.props.itemTypes;
        const itemTypeOptions = itemTypes.map(t => {
            if (item.type === t) {
                return (
                    <option key={t} value={t} selected="selected">{t}</option>
                )
            } else {
                return (
                    <option key={t} value={t}>{t}</option>
                )
            }
        });

        return (
            <div className='TodoItemSummary'>

                <form>
                    <label>内容：</label>
                    <input 
                        value={item.content}
                        onChange={this.itemSummaryContentChangeHandler}></input>
                </form>

                <form>
                    <label>类别：</label>
                    <select
                        onChange={this.itemSummaryTypeChangeHandler}>
                        {itemTypeOptions}
                    </select>
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
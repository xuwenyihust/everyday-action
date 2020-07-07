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
        
        let item = null;

        if (this.state.item === null) {
            item = this.props.item
        } else {
            item = this.state.item
        }

        const itemTypes = this.props.itemTypes;
        const itemTypeOptions = itemTypes.map(t =>
            <option key={t} value={t}>{t}</option>
        )

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
                        {/* <option value="运动">运动</option>
                        <option value="生活">生活</option>
                        <option value="学习">学习</option> */}
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
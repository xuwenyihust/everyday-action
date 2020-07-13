import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import './TodoItemSummary.css';

const todoItemSummary = (props) => {

    const item = props.item;

    const itemTypes = props.itemTypes;
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

    let dueDate;
    if (props.item.due_date) {
        dueDate = props.item.due_date;
    } else {
        dueDate = null;
    }

    return (
        

        <div className='TodoItemSummary'>

            <form>
                <label>内容：</label>
                <input 
                    value={props.item.content}
                    onChange={props.itemSummaryContentChanged}></input>
            </form>

            <form>
                <label>类别：</label>
                <select
                    onChange={props.itemSummaryTypeChanged}>
                    {itemTypeOptions}
                </select>
            </form>

            <div className="DueDatePick">
                <p>截止日期: </p>
                <SingleDatePicker
                    date={dueDate} // momentPropTypes.momentObj or null
                    onDateChange={(date) => props.itemDueDateChanged(date, item.id)} // PropTypes.func.isRequired
                    focused={props.dueDatePickFocused} // PropTypes.bool
                    onFocusChange={({ focused }) => props.itemDueDateFocusChanged({ focused })} // PropTypes.func.isRequired
                    id="date_input" // PropTypes.string.isRequired,
                />
            </div>
            

            <button
                type="button"
                className="saveButton"
                onClick={() => props.saveClicked(props.item)}>确定</button>
            <button
                type="button" 
                className="cancelButton"
                onClick={() => props.cancelClicked()}>取消</button>
        </div>

    );
};

export default todoItemSummary;
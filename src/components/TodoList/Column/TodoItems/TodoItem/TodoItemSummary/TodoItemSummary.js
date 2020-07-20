import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import SubTasks from './SubTasks/SubTasks';
import SubTask from './SubTasks/SubTask/SubTask';
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

    const subTaskObjects = props.item.sub_tasks;
    let subTasks;
    if (subTaskObjects) {
        const hasSubTasks = Object.entries(subTaskObjects).length !== 0;
        subTasks = Object.keys(subTaskObjects).map((subTaskKey) => {
            return <SubTask 
                        key={subTaskKey}
                        itemKey={props.item.id}
                        subTaskKey={subTaskKey}
                        content={subTaskObjects[subTaskKey].content}
                        checked={subTaskObjects[subTaskKey].done}
                        subTaskChecked={props.subTaskChecked}
                        subTaskEdited={props.subTaskEdited}
                        subTaskClosed={props.subTaskClosed}/>
        });
    }

    return (
    
        <div className='TodoItemSummary'>

            <div className='Content'>
                <form>
                    <input 
                        value={props.item.content}
                        onChange={props.itemSummaryContentChanged}></input>
                </form>
            </div>

            <div className='Type'>
                <form>
                    <label>类别: </label>
                    <select
                        onChange={props.itemSummaryTypeChanged}>
                        {itemTypeOptions}
                    </select>
                </form>
            </div>

            <div className="DueDatePick">
                <p>截止日期: </p>
                <div className="Pick">
                    <SingleDatePicker
                        date={dueDate} // momentPropTypes.momentObj or null
                        onDateChange={(date) => props.itemDueDateChanged(date, item.id)} // PropTypes.func.isRequired
                        focused={props.dueDatePickFocused} // PropTypes.bool
                        onFocusChange={({ focused }) => props.itemDueDateFocusChanged({ focused })} // PropTypes.func.isRequired
                        id="date_input" // PropTypes.string.isRequired,
                    />
                    <DeleteIcon 
                        fontSize='medium'
                        onClick={() => props.itemDueDateDeleted(item.id)}/>
                </div>

            </div>

            <SubTasks
                itemId = {props.item.id}
                subTaskAdded={props.subTaskAdded}
                subTaskInputChanged={props.subTaskInputChanged}>
                {subTasks}
            </SubTasks>

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
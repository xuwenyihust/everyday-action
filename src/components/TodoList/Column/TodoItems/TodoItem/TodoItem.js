import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './TodoItem.css';

class todoItem extends Component {

    render() {

        let icon;
        switch (this.props.item.type) {
            case "运动":
                icon = <DirectionsRunIcon />;
                break;
            case "生活":
                icon = <AirlineSeatIndividualSuiteIcon />;
                break;
            case "学习":
                icon = <ImportContactsIcon />;
                break;
            case "工作":
                icon = <LaptopChromebookIcon />;
                break;
            case "娱乐":
                icon = <SportsEsportsIcon />;
                break;
            default:
                icon = <Icon>star</Icon>;
                break;
        }

        // Due date
        let dueDate;
        const currentDate = moment();
        const duePassed = currentDate > this.props.item.due_date;

        if (this.props.item.due_date && !duePassed) {
            dueDate = <div className='DueDate good'>
                        <AccessTimeIcon fontSize='small'/> 
                        <p>{this.props.item.due_date.format('L')}</p></div>;
        } else if (this.props.item.due_date && duePassed) {
            dueDate = <div className='DueDate passed'>
                        <AccessTimeIcon fontSize='small'/> 
                        <p>{this.props.item.due_date.format('L')}</p></div>;
        } else {
            dueDate = null;
        }

        // Subtasks
        let subTasks;
        const subTaskObjects = this.props.item.sub_tasks;
        const hasSubTasks = Object.entries(subTaskObjects).length !== 0; 
        if (hasSubTasks) {
            const doneTasksCount = Object.keys(subTaskObjects).filter((subTaskKey, index) => 
                subTaskObjects[subTaskKey].done === true).length;
            subTasks = <div className='SubTaskIcon'>
                        <AssignmentTurnedInIcon fontSize='small'/>
                        <p>{doneTasksCount}/{Object.keys(subTaskObjects).length}</p></div>
        } else {
            subTasks = null;
        }

        return (
            <Draggable
                draggableId={this.props.item.id.toString()}
                index={this.props.index}>
                    {(provided, snapshot) => (
                        <div className={`TodoItem isDragging_${snapshot.isDragging}`}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            {icon}
                            <p 
                                className={this.props.item.done ? 'done' : 'undone'}
                                onClick={() => this.props.contentClicked(this.props.item.id)}>{this.props.item.content}</p>
            
                            <button
                                type="button" 
                                className="editButton"
                                onClick={() => this.props.editClicked(this.props.item.id)}><i className="fa fa-bars"></i></button>
                            <button 
                                type="button" 
                                className="closeButton"
                                onClick={() => this.props.closeClicked(this.props.item.id, this.props.columnId)}><i className="fa fa-close"></i></button>
                            <div className="break"></div>
                            {dueDate}
                            {subTasks}
                        </div>
                    )}
            </Draggable>
        );
    };
}

export default todoItem;
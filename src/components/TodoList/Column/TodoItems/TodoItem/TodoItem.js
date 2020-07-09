import React from 'react';
import Icon from '@material-ui/core/Icon';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import './TodoItem.css';

const todoItem = (props) => {

    let icon;
    switch (props.item.type) {
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

    return (
        <div className="TodoItem">
            {icon}
            <p 
                className={props.item.done ? 'done' : 'undone'}
                onClick={() => props.contentClicked(props.item.id)}>{props.item.content}</p>

            <button
                type="button" 
                className="editButton"
                onClick={() => props.editClicked(props.item.id)}><i className="fa fa-bars"></i></button>
            <button 
                type="button" 
                className="closeButton"
                onClick={() => props.closeClicked(props.item.id, props.columnId)}><i className="fa fa-close"></i></button>
        </div>
    );
};

export default todoItem;
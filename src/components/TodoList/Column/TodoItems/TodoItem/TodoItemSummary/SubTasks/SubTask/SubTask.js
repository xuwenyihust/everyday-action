import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import './SubTask.css';

const subTask = (props) => {
    return (
        <div className='SubTask'>
            <li className={props.checked ? 'done' : 'undone'}><input 
                    type="checkbox" 
                    checked={props.checked}
                    onChange={() => props.subTaskChecked(props.subTaskKey)}/>
                    <InputBase
                        defaultValue="Naked input"
                        value={props.content}
                        inputProps={{ 'aria-label': 'naked' }}
                        onChange={(e) => props.subTaskEdited(e, props.subTaskKey)}
                    /></li>
                    {/* {props.content}</li> */}
            <button 
                type="button" 
                className="closeButton"
                onClick={() => props.subTaskClosed( props.subTaskKey)}><i className="fa fa-close"></i></button>
        </div>
    );
}

export default subTask;


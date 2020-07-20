import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import './SubTasks.css';

const subTasks = (props) => {
    return (
        <div className='SubTasks'>
            <p>子任务:</p> 
            <form noValidate 
                autoComplete="off"
                onSubmit={(e) => props.subTaskAdded(e)}>
                <TextField 
                    id="outlined-margin-dense" 
                    defaultValue="新子任务"
                    margin='dense'
                    variant="outlined" 
                    onChange={(e) => props.subTaskInputChanged(e)}/>
                <button type="submit">+</button>
            </form>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default subTasks;
import React from 'react';
import './TodoHeader.css';

const todoHeader = (props) => (
    <div>
        <input 
            placeholder={props.value}
            value={props.value}
            onChange={props.inputChanged}></input>
        <button type="submit">添加</button>
    </div>
);

export default todoHeader;
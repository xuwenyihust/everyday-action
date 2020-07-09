import React from 'react';
import './TodoForm.css';

const todoForm = (props) => (
    <div className='TodoForm'>
        <form onSubmit={props.submitted}>
            <input 
                placeholder={props.value}
                value={props.value}
                onChange={props.inputChanged}></input>
            <button type="submit">+</button>
        </form>
    </div>
);

export default todoForm;
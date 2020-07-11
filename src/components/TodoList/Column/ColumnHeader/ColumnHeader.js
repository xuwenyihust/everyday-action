import React from 'react';
import './ColumnHeader.css';

const columnHeader = (props) => {
    return (
        <div className='ColumnHeader'>
            {props.children}
            <p>({props.itemNum})</p>
        </div>
    );
}

export default columnHeader;
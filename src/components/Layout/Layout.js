import React from 'react';
import './Layout.css';

const layout = (props) => {

    return (
        <div>
            <div>Nav</div>
            <main className="Content">
                {props.children}
            </main>
        </div>
    )
};

export default layout;

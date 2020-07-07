import React from 'react';
import './Layout.css';
import Navigation from '../Navigation/Navigation';

const layout = (props) => {

    return (
        <div>
            <Navigation />
            <main className="Content">
                {props.children}
            </main>
        </div>
    )
};

export default layout;

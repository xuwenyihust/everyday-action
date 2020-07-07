import React from 'react';
import './Navigation.css';
import NavigationItems from './NavigationItems/NavigationItems';

const navigation = () => (
    <header className='Navigation'>
        {/* <div>MENU</div> */}
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default navigation;
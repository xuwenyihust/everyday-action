import React from 'react'
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active={true}>主页</NavigationItem>
    </ul>
);

export default navigationItems;
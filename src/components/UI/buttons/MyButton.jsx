import classes from './MyButton.module.css';
import React from 'react';

const MyButton = ({children, ...props}) => {
 return (
    <button {...props} className={classes.navbar__exit}>
        {children}
    </button>
 );

};

export default MyButton;

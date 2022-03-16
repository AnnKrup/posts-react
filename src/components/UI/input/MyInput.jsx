import classes from './MyInput.module.css';
import React from 'react';

const MyInput = (props) => {
 return (
    <input className={classes.input} {...props}/>
 );

};

export default MyInput;

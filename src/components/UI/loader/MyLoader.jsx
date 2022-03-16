import classes from './MyLoader.module.css';
import React from 'react';

const MyLoader = (props) => {
 return (
    <div className={classes.Container}>
        <div className={classes.MyLoader}></div>
    </div>
 );
};

export default MyLoader;

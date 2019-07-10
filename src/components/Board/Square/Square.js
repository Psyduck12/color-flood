import React from 'react'
import classes from './Square.module.css';

const Square = ({color}) => {
    return (
        <div className={[classes.square, classes[color]].join(' ')} />
    )
}

export default Square

import React from 'react'
import Square from './Square/Square';
import Modal from '../UI/Modal/Modal';

import classes from './Board.module.css';

const Board = ({board, count, win}) => {
    const renderSquare = board.map((row, index1) => 
        row.map((color, index2) => <Square color={color} key={index1.toString() + index2.toString()}/>)
    )

    return (
        <div className={classes.board}>
            <div className={classes.grid}>
                {renderSquare}
            </div>
            {win ? <Modal score={count}/> : null}
        </div>
    )
}

export default Board

import React from 'react';
import Die from './Die';
import './Dice.css';

 const  Dice = (props) => {
    const {locked, handleClick} = props
    return <div className="Dice">
             {props.dice.map((d, idx) => 

             <Die handleClick = { handleClick }
                val = { d }
                locked = { locked[idx] }
                idx = { idx }
                key = { idx } />)}
                
          </div>
  }


export default Dice;

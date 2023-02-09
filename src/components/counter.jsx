import React, {useState} from "react";


const Counter = ({value, name, id, onDelete, onIncrement, onDecrement}) => {
  console.log(id)


  const formatCount = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }



    return (
      <div>
        <span>{name}</span>
        <span className={getBageClasses()}>{formatCount()}</span>
        <button className='btn btn-primary btn-sm m-2' onClick={() => onIncrement(value, id)}>+</button>
        <button className='btn btn-primary btn-sm m-2' onClick={() => onDecrement(value, id)}>-</button>
        <button className='btn btn-danger btn-sm m-2' onClick={() => onDelete(id)}>Delete</button>
      </div>
    )
  }


export default Counter
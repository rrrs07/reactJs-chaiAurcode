import React from 'react'

function TodoItem(props) {
  return (
    
      <li className='todo-item'>
        <span>
        <input className='checkbox' type="checkbox" />
        <span>{props.text}</span>
        </span>
        <p>...</p>
      </li>
    
  )
}

export default TodoItem

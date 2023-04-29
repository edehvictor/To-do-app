import React from 'react'
import ListItem from './ListItem'

const ToDoBox = ({ toDoList, handleDelete, handleCheckChange }) => {
  return (
    <ul className='todo-list'>
      {toDoList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleCheckChange={handleCheckChange} />
      ))}
    </ul>
  )
}

export default ToDoBox
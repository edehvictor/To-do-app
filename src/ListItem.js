import React from 'react'

const ListItem = ({ item, handleDelete, handleCheckChange,count }) => {
    return (
        <li key={item.id}>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckChange(item.id)}
            />
            <label style={(item.completed) ? { textDecoration: 'line-through' } : null}
            > {item.task} </label>
             <button onClick={() => handleDelete(item.id)}>❌</button>
        </li>
    )
}

export default ListItem
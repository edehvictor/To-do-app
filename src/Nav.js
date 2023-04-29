import React from 'react'

const Nav = ({ newItem, setNewItem, addItem }) => {
    return (
        <form onSubmit={addItem}>
            <input
                id='item'
                autoFocus
                required
                type="text"
                placeholder='What needs to be done?'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            
        </form>
    )
}

export default Nav
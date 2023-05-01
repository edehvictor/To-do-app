import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa'

const Footer = ({ count, handleDelteCompletedTask }) => {
    // const getdate = new Date()
    return (
        <div className='footer' >
            <h2 > {count} completed  </h2>
            <span onClick={handleDelteCompletedTask}>✂</span>

        </div>
    )
}

export default Footer
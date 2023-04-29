import React from 'react'

const Footer = ({count}) => {
    const getdate = new Date()
    return (
        <div>
            <h2 className='footer'> {count} completed {getdate.getFullYear()}</h2>

        </div>
    )
}

export default Footer
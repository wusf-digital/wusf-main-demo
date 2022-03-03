import React from 'react'

export default function ContentSection({ name, children }) {
    return (
        <>
            <div className='content__header'>{ name }</div>
            <hr className='content--separator'></hr>
            { children }
        </>
    )
}

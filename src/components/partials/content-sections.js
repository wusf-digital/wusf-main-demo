import React from 'react'

export default function ContentSection({ name, children }) {
    return (
        <>
            <div className='content__header'>{ name }</div>
            <hr width='50%' align='left'></hr>
            { children }
        </>
    )
}

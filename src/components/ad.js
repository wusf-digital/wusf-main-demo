import React from 'react'

export default function Ads() {
    return (
        <div className='ad-container'>
            <Ad name='Ad 1' />
            <Ad name='Ad 2' />
            <Ad name='Ad 3' />
        </div>
    )
}

function Ad({ name }) {
    return (
        <div className='ad' style={{height: 120}}>{ name }</div>
    )
}
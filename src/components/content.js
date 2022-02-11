import React from 'react'

import WUSFNetwork from './homepage/wusf-network'
import WUSFNews from './homepage/wusf-news'

export default function Content() {
    return (
        <article className='content'>
            <WUSFNetwork />
            <WUSFNews />
        </article>
    )
}
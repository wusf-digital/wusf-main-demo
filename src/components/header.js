import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

import DonateButton from './buttons/donate'
import Temperature from './homepage/temperature'

export default function Header() {
    return (
        <header className='main-head'>
            <div className='header-bar'>
                <Link to='/'>
                    <StaticImage
                        layout="fixed"
                        formats={["auto", "webp", "avif"]}
                        src="../images/wusf_logo.webp"
                        width={267}
                        quality={95}
                        alt="WUSF Logo"
                    />
                </Link>
                <div className='header-bar__end'>
                    <DonateButton />
                    <Temperature />
                </div>
            </div>
        </header>
    )
}
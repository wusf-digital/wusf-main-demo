import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    return (
        <footer className='main-footer'>
            <div className='main-footer__copyright'>© {new Date().getFullYear()} All rights reserved, WUSF</div>
            <div className='main-footer__logo-container'>
                <StaticImage
                    layout="fixed"
                    src="../images/usf-logo-classic-white_small.png"
                    width={90}
                    quality={95}
                    alt="USF"
                />
                <StaticImage
                    layout="fixed"
                    src="../images/cpb_logo_horizontal.png"
                    width={70}
                    quality={95}
                    alt="CPB"
                />
                <StaticImage
                    layout="fixed"
                    src="../images/nprlogo_blackoutline_custom.png"
                    width={90}
                    quality={95}
                    alt="NPR"
                />
                <StaticImage
                    layout="fixed"
                    src="../images/protect-public-media_logohorizontal.png"
                    width={60}
                    quality={95}
                    alt="Protect Public Media"
                />
            </div>
           
        </footer>
    )
}
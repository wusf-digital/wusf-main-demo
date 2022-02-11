import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ContentSection from '../partials/content-sections'

export default function WUSFNetwork() {
    return ( 
        <ContentSection name='WUSF Network'>
            <div className='content__wusf-network'>
                <StaticImage
                    layout="fixed"
                    src="../../images/logo_wusf-news.png"
                    width={175}
                    quality={95}
                    alt="WUSF News"
                />
                <StaticImage
                    layout="fixed"
                    src="../../images/logo_wsmr-classical.png"
                    width={175}
                    quality={95}
                    alt="WSMR Classical"
                />
                <StaticImage
                    layout="fixed"
                    src="../../images/logo_wusf-jazz.png"
                    width={175}
                    quality={95}
                    alt="WUSF Jazz"
                />
                <StaticImage
                    layout="fixed"
                    src="../../images/logo_arts-axis-fl.png"
                    width={150}
                    quality={95}
                    alt="Arts Axis Florida"
                />
                <StaticImage
                    layout="fixed"
                    src="../../images/logo_the-zest.png"
                    width={150}
                    quality={95}
                    alt="Arts Axis Florida"
                />
            </div>
        </ContentSection>

    )
}
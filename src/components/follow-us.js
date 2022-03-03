import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function FollowUs(props) {
    return (
        <div className={props.className}>
            <hr className='main-nav__divider' />
            <span>Follow Us</span>
            <div className='main-nav__social-links-list'>
                <a href='https://www.facebook.com/WUSF?ref=ts'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faFacebook} size='1x' />
                </a>
                <a href='https://twitter.com/wusf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faTwitter} size='1x' />
                </a>
                <a href='https://www.instagram.com/wusfpublicmedia/?hl=en'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} size='1x' />
                </a>
                <a href='https://www.youtube.com/user/WUSFChannel'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faYoutube} size='1x' />
                </a>
                <a href='https://www.linkedin.com/company/wusf-public-media/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} size='1x' />
                </a>
            </div>
        </div>
    )
}
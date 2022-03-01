import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
    return (
        <nav className='main-nav'>
            <div className='main-nav__container'>
            <ul>
                <Link to='/schedule'>
                    <li>Schedule</li>
                </Link>
                <li>Programs</li>
                <Link to='/ways-to-support'><li>Support</li></Link>
                <a href='https://wusfnews.wusf.usf.edu/weather'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>Weather</li>
                </a>
                <a href='https://wusfnews.wusf.usf.edu/community-calendar'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>Events</li>
                </a>
                
                <Link to='/about-us'><li>About Us</li></Link>
                <a href='https://wusfnews.wusf.usf.edu/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>News Home</li>
                </a>
            </ul>
            <hr className='main-nav__divider' />
            <ul>
                <a href='https://health.wusf.usf.edu/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>Health News Florida</li>
                </a>
                <a href='https://wusfnews.wusf.usf.edu/show/florida-matters'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>Florida Matters</li>
                </a>
                <a href='https://wusfnews.wusf.usf.edu/term/university-beat'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <li>University Beat</li>
                </a>
                
            </ul>
            <hr className='main-nav__divider' />
            <span>Follow Us</span>
            <div className='main-nav__social'>
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
        </nav>
    )
}
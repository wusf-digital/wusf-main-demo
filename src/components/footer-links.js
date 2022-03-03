import React from 'react'
import { Link } from 'gatsby'

import FollowUs from './follow-us'

export default function FooterLinks() {
    return (
        <nav className='footer-links'>
            <div className='footer-links__support'>
                <span className='footer-links__title'>Ways to Support</span>
                <ul className='footer-links__list'>
                    <a href='https://wusf.careasy.org/home'
                        rel='noopener noreferrer'>
                        <li>Donate Your Vehicle</li>
                    </a>
                    <Link to='/ways-to-support'>
                        <li>Make A Donation</li>
                    </Link>
                    <Link to='/sustainer'>
                        <li>Become A Member</li>
                    </Link>
                    <Link to='/corporate-sponsor'>
                        <li>Corporate Sponsor</li>
                    </Link>
                    
                </ul>
            </div>
            <div className='footer-links__programming'>
                <span className='footer-links__title'>Programming</span>
                <ul className='footer-links__list'>
                    <Link to='/ways-to-listen'>
                        <li>Ways To Listen</li>
                    </Link>
                    <Link to='/app'>
                        <li>Download Our App</li>
                    </Link>
                    <a href='https://dev.wusf.digital/wp-content/uploads/assets/pdfs/Digital-Stream-Troubleshooting.pdf'
                        rel='noopener noreferrer'>
                        <li>Digital Stream Help</li>
                    </a>
                    <a href='https://thefloridachannel.org/'
                        rel='noopener noreferrer'>
                        <li>The Florida Channel</li>
                    </a>
                </ul>
            </div>
            <div className='footer-links__about'>
                <span className='footer-links__title'>About</span>
                <ul className='footer-links__list'>
                    <Link to='/contact-us'>
                        <li>Contact Us</li>
                    </Link>
                    <Link to='/employment-opportunities'>
                        <li>Careers</li>
                    </Link>
                    <a href='https://wusfnews.wusf.usf.edu/meet-the-staff'
                        rel='noopener noreferrer'>
                        <li>Meet The Staff</li>
                    </a>
                    <Link to='internship'>
                        <li>Internships</li>
                    </Link>
                    <Link to='/newsletter'>
                        <li>Newsletter</li>
                    </Link>
                    <Link to='/governance'>
                        <li>Governance</li>
                    </Link>
                    <a href='https://publicfiles.fcc.gov/fm-profile/wusf'
                        rel='noopener noreferrer'>
                        <li>FCC Public Files</li>
                    </a>
                    <a href='mailto:tsmith45@wusf.org'>
                        <li>Public File Assistance</li>
                    </a>
                    <a href='https://wusf.org/wp-content/uploads/2021/09/2021_WUSF_EEO_Public_File_Report.pdf'
                        rel='noopener noreferrer'>
                        <li>2021 EEO Report</li>
                    </a>
                </ul>
            </div>
            <FollowUs className='footer-links--social'/>
        </nav>
    )
}
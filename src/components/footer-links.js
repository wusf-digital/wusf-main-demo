import React from 'react'

export default function FooterLinks() {
    return (
        <nav className='footer-links'>
            <div className='footer-links__support'>
                <span className='footer-links__title'>Ways to Support</span>
                <ul>
                    <li>Donate Your Vehicle</li>
                    <a href='https://wusf.careasy.org/home'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <li>Make A Donation</li>
                    </a>
                    <li>Become A Member</li>
                    <li>Corporate Sponsor</li>
                </ul>
            </div>
            <div className='footer-links__programming'>
                <span className='footer-links__title'>Programming</span>
                <ul>
                    <li>Ways To Listen</li>
                    <li>Download Our App</li>
                    <li>Digital Stream Help</li>
                    <a href='https://thefloridachannel.org/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <li>The Florida Channel</li>
                    </a>
                </ul>
            </div>
            <div className='footer-links__about'>
                <span className='footer-links__title'>About</span>
                <ul>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Meet The Staff</li>
                    <li>Internships</li>
                    <li>Newsletter</li>
                    <li>Governance</li>
                    <a href='https://publicfiles.fcc.gov/fm-profile/wusf'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <li>FCC Public Files</li>
                    </a>
                    <li>Public File Assistance</li>
                    <li>2021 EEO Report</li>
                </ul>
            </div>
        </nav>
    )
}
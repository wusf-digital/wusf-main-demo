import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import FollowUs from './follow-us'

export default function NavbarNew() {
    return (
        <Navbar className='main-nav' expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link to="/schedule" activeClassName="active" className='nav-link'>Schedule</Link>
                    <Link to="/" activeClassName="active" className='nav-link'>Programs</Link>
                    <Link to="/ways-to-support" activeClassName="active" className='nav-link'>Support</Link>
                    <Nav.Link href='https://wusfnews.wusf.usf.edu/weather' className='nav-link'>Weather</Nav.Link>
                    <Nav.Link href='https://wusfnews.wusf.usf.edu/community-calendar' className='nav-link'>Events</Nav.Link>
                    <Link to='/about-us' activeClassName='active' className='nav-link'>About Us</Link>
                    <Nav.Link href='https://wusfnews.wusf.usf.edu/' className='nav-link'>News</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

 function NavbarOld() {
    return (
        <nav className='main-nav'>
            <div className='main-nav__container'>
                <ul className='main-nav--links-list'>
                    <Link to='/schedule'>
                        <li className='main-nav--links-list'>Schedule</li>
                    </Link>
                        <li className='main-nav--links-list'>Programs</li>
                    <Link to='/ways-to-support'>
                        <li className='main-nav--links-list'>Support</li>
                    </Link>
                    <a href='https://wusfnews.wusf.usf.edu/weather'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>Weather</li>
                    </a>
                    <a href='https://wusfnews.wusf.usf.edu/community-calendar'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>Events</li>
                    </a>
                    
                    <Link to='/about-us'>
                        <li className='main-nav--links-list'>About Us</li>
                    </Link>
                    <a href='https://wusfnews.wusf.usf.edu/'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>News Home</li>
                    </a>
                </ul>
                <hr className='main-nav__divider' />
                <ul className='main-nav--links-list'>
                    <a href='https://health.wusf.usf.edu/'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>Health News Florida</li>
                    </a>
                    <a href='https://wusfnews.wusf.usf.edu/show/florida-matters'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>Florida Matters</li>
                    </a>
                    <a href='https://wusfnews.wusf.usf.edu/term/university-beat'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>University Beat</li>
                    </a>
                    <a href='https://wusfnews.wusf.usf.edu/storycorps-tampa-bay'
                        rel='noopener noreferrer'>
                        <li className='main-nav--links-list'>StoryCorps Tampa Bay</li>
                    </a> 
                </ul>
                <FollowUs className='main-nav--social' />
            </div>
        </nav>
    )
}
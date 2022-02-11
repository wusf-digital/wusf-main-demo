import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function DonateButton() {
    return (
        <button className='donate'>
            <a href='https://wusf.secureallegiance.com/wusf/WebModule/Donate.aspx?P=SUST897&PAGETYPE=PLG&CHECK=6aiGjWCJvyrrTn%2f81%2bk72%2bzWDeZ%2beA1M'
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faHeart} size='1x' />
                <span>&nbsp;&nbsp;</span>
                <span>Donate</span>
            </a>
        </button>
    )
}